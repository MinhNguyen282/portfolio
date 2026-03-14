import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaArrowRight } from 'react-icons/fa';
import LazyImage from '../LazyImage';
import { getStrapiMediaUrl, formatDate } from '../../services/strapi';

const BlogCard = ({ article, index = 0 }) => {
  const coverUrl = getStrapiMediaUrl(article.cover);
  const category = article.category;
  const tags = article.tags || [];

  return (
    <div
      className="group relative opacity-0 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Featured glow effect */}
      {article.featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
      )}

      <div
        className={`relative h-full bg-white dark:bg-ink-900 rounded-2xl overflow-hidden border transition-all duration-500 ${
          article.featured
            ? 'border-accent-300/50 dark:border-accent-600/30'
            : 'border-ink-200 dark:border-ink-800'
        } hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2`}
      >
        {/* Cover image section */}
        <Link to={`/blog/${article.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden">
            {coverUrl ? (
              <LazyImage
                src={coverUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent-400/20 to-accent-600/20 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-accent-500/20">
                  {article.title?.charAt(0) || 'B'}
                </span>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Category badge */}
            {category && (
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1.5 text-white text-xs font-bold rounded-full shadow-lg"
                  style={{ backgroundColor: category.color || '#f97316' }}
                >
                  {category.name}
                </span>
              </div>
            )}

            {/* Reading time badge */}
            {article.readingTime && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-ink-900/90 backdrop-blur-sm text-ink-700 dark:text-ink-300 text-xs font-medium rounded-full">
                  <FaClock className="w-3 h-3" />
                  {article.readingTime} min read
                </span>
              </div>
            )}

            {/* Date at bottom of image */}
            <div className="absolute bottom-4 left-4">
              <span className="text-white/80 text-xs font-medium">
                {formatDate(article.publishedAt)}
              </span>
            </div>
          </div>
        </Link>

        {/* Content section */}
        <div className="p-6">
          <Link to={`/blog/${article.slug}`} className="block group/link">
            <h3 className="font-display text-xl font-bold text-ink-900 dark:text-ink-100 mb-3 group-hover/link:text-accent-500 transition-colors duration-300 flex items-center gap-2 line-clamp-2">
              {article.title}
              <FaArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </h3>
          </Link>

          <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.id || tag.slug}
                  className="px-3 py-1 bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 text-xs font-medium rounded-full transition-colors duration-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {tag.name}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-3 py-1 text-ink-500 text-xs font-medium">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default BlogCard;
