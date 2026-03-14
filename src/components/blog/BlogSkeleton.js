import React from 'react';

const BlogSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-ink-900 rounded-2xl overflow-hidden border border-ink-200 dark:border-ink-800 animate-pulse"
        >
          {/* Cover skeleton */}
          <div className="aspect-[16/10] bg-ink-200 dark:bg-ink-800" />

          {/* Content skeleton */}
          <div className="p-6 space-y-4">
            {/* Date placeholder */}
            <div className="h-3 bg-ink-200 dark:bg-ink-800 rounded w-1/4" />

            {/* Title placeholder */}
            <div className="space-y-2">
              <div className="h-5 bg-ink-200 dark:bg-ink-800 rounded w-3/4" />
              <div className="h-5 bg-ink-200 dark:bg-ink-800 rounded w-1/2" />
            </div>

            {/* Excerpt placeholder */}
            <div className="space-y-2">
              <div className="h-3 bg-ink-200 dark:bg-ink-800 rounded w-full" />
              <div className="h-3 bg-ink-200 dark:bg-ink-800 rounded w-5/6" />
            </div>

            {/* Tags placeholder */}
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 bg-ink-200 dark:bg-ink-800 rounded-full" />
              <div className="h-6 w-20 bg-ink-200 dark:bg-ink-800 rounded-full" />
              <div className="h-6 w-14 bg-ink-200 dark:bg-ink-800 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
