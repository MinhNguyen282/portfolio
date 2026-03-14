import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogPagination = ({ pagination, onPageChange }) => {
  const { page, pageCount } = pagination;

  if (pageCount <= 1) return null;

  /**
   * Generate page number array with ellipsis.
   * Shows: first, last, current, and 1 page on each side of current.
   */
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= page - delta && i <= page + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex justify-center items-center gap-2 mt-16 opacity-0 animate-fadeIn"
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
      aria-label="Blog pagination"
    >
      {/* Previous button */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="p-2.5 rounded-lg border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-400 disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
        aria-label="Previous page"
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num, idx) =>
        num === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            className="w-10 h-10 flex items-center justify-center text-ink-500 text-sm"
          >
            ...
          </span>
        ) : (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
              num === page
                ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                : 'border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-400 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-500'
            }`}
            aria-label={`Go to page ${num}`}
            aria-current={num === page ? 'page' : undefined}
          >
            {num}
          </button>
        )
      )}

      {/* Next button */}
      <button
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
        className="p-2.5 rounded-lg border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-400 disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
        aria-label="Next page"
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
};

export default BlogPagination;
