import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaClock, FaCalendarAlt, FaTag } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../SEO';
import LazyImage from '../LazyImage';
import AuthorCard from './AuthorCard';
import BlogSkeleton from './BlogSkeleton';
import { useArticle, useBlogMeta } from '../../hooks/useBlog';
import {
  getStrapiMediaUrl,
  formatDate,
  calculateReadingTime,
} from '../../services/strapi';

const BlogPost = () => {
  const { slug } = useParams();
  const { article, loading, error } = useArticle(slug);
  const { author } = useBlogMeta();

  // Loading state
  if (loading) {
    return (
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24">
          <BlogSkeleton count={1} />
          <div className="mt-8 space-y-4 animate-pulse">
            <div className="h-4 bg-ink-200 dark:bg-ink-800 rounded w-full" />
            <div className="h-4 bg-ink-200 dark:bg-ink-800 rounded w-5/6" />
            <div className="h-4 bg-ink-200 dark:bg-ink-800 rounded w-4/6" />
            <div className="h-4 bg-ink-200 dark:bg-ink-800 rounded w-full" />
            <div className="h-4 bg-ink-200 dark:bg-ink-800 rounded w-3/4" />
          </div>
        </div>
      </section>
    );
  }

  // Error or not found state
  if (error || !article) {
    return (
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24">
          <div className="bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-12 text-center">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.768 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-100 mb-4">
              Article Not Found
            </h2>
            <p className="text-ink-600 dark:text-ink-400 mb-8">
              {error || "Sorry, we couldn't find the article you're looking for."}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink-900 dark:bg-ink-100 text-ink-50 dark:text-ink-900 font-semibold rounded-full hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const coverUrl = getStrapiMediaUrl(article.cover);
  const category = article.category;
  const tags = article.tags || [];
  const readingTime = article.readingTime || calculateReadingTime(article.content);
  const siteUrl = process.env.REACT_APP_SITE_URL || window.location.origin;

  return (
    <>
      <SEO
        title={`${article.title} - Minh's Blog`}
        description={article.excerpt}
        image={coverUrl || '/avatar.jpg'}
        url={`/blog/${article.slug}`}
        type="article"
      />

      {/* Article-specific structured data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            image: coverUrl,
            datePublished: article.publishedAt,
            author: {
              '@type': 'Person',
              name: author?.name || 'Nguyễn Hữu Hoàng Minh',
            },
            publisher: {
              '@type': 'Person',
              name: 'Nguyễn Hữu Hoàng Minh',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/blog/${article.slug}`,
            },
          })}
        </script>
      </Helmet>

      <article className="relative bg-ink-50 dark:bg-ink-950 min-h-screen transition-colors duration-500">
        {/* Hero section with cover image */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {coverUrl ? (
            <LazyImage
              src={coverUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-400/30 via-ink-900 to-ink-950"></div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent"></div>

          {/* Content over image */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
              {/* Back button */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 mb-6 text-white/70 hover:text-white transition-colors duration-300 group opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                <FaArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium text-sm">Back to Blog</span>
              </Link>

              {/* Category badge */}
              {category && (
                <div
                  className="mb-4 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
                >
                  <span
                    className="px-3 py-1.5 text-white text-xs font-bold rounded-full"
                    style={{ backgroundColor: category.color || '#f97316' }}
                  >
                    {category.name}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                {article.title}
              </h1>

              {/* Meta info */}
              <div
                className="flex flex-wrap items-center gap-4 text-white/70 text-sm opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <FaCalendarAlt className="w-3.5 h-3.5" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaClock className="w-3.5 h-3.5" />
                  {readingTime} min read
                </span>
                {tags.length > 0 && (
                  <span className="inline-flex items-center gap-1.5">
                    <FaTag className="w-3.5 h-3.5" />
                    {tags.map((t) => t.name).join(', ')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16">
          {/* Excerpt / lead paragraph */}
          {article.excerpt && (
            <p
              className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed mb-12 font-body border-l-4 border-accent-500 pl-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              {article.excerpt}
            </p>
          )}

          {/* Rich text content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-ink-900 dark:prose-headings:text-ink-50 prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-ink-700 dark:prose-p:text-ink-300 prose-p:leading-relaxed
              prose-a:text-accent-500 hover:prose-a:text-accent-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-strong:text-ink-900 dark:prose-strong:text-ink-100
              prose-code:font-mono prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-ink-100 dark:prose-code:bg-ink-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-ink-900 dark:prose-pre:bg-ink-950 prose-pre:border prose-pre:border-ink-200 dark:prose-pre:border-ink-800 prose-pre:rounded-2xl prose-pre:shadow-lg
              prose-img:rounded-2xl prose-img:shadow-lg
              prose-blockquote:border-accent-500 prose-blockquote:text-ink-600 dark:prose-blockquote:text-ink-400 prose-blockquote:not-italic
              prose-li:text-ink-700 dark:prose-li:text-ink-300
              prose-hr:border-ink-200 dark:prose-hr:border-ink-800
              opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Tags section */}
          {tags.length > 0 && (
            <div
              className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-800 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaTag className="w-4 h-4 text-accent-500" />
                <span className="text-sm font-medium text-ink-500">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.id || tag.slug}
                    to={`/blog?tag=${tag.slug}`}
                    className="px-4 py-2 bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 rounded-lg text-sm font-medium hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-300"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author card */}
          <AuthorCard author={author} />

          {/* Back to blog */}
          <div
            className="mt-12 text-center opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink-900 dark:border-ink-200 text-ink-900 dark:text-ink-200 font-display font-semibold rounded-full hover:bg-ink-900 hover:text-ink-50 dark:hover:bg-ink-200 dark:hover:text-ink-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
