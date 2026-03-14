import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import LazyImage from '../LazyImage';
import { getStrapiMediaUrl } from '../../services/strapi';

const AuthorCard = ({ author }) => {
  if (!author) return null;

  const avatarUrl = getStrapiMediaUrl(author.avatar);

  const socialLinks = [
    { url: author.github, icon: FaGithub, label: 'GitHub' },
    { url: author.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { url: author.website, icon: FaGlobe, label: 'Website' },
  ].filter((link) => link.url);

  return (
    <div className="mt-16 p-8 bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 opacity-0 animate-fadeIn"
      style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar */}
        {avatarUrl && (
          <LazyImage
            src={avatarUrl}
            alt={author.name}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-accent-500/20 flex-shrink-0"
          />
        )}

        {/* Author info */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-500 font-medium mb-1">
            Written by
          </p>
          <h3 className="font-display text-xl font-bold text-ink-900 dark:text-ink-100 mb-2">
            {author.name}
          </h3>
          {author.bio && (
            <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-4">
              {author.bio}
            </p>
          )}

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map(({ url, icon: Icon, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300"
                  aria-label={`${author.name}'s ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
