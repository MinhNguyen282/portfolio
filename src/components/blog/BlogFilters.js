import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const BlogFilters = ({
  categories = [],
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
}) => {
  const [searchInput, setSearchInput] = useState(search || '');

  // Debounce search input — wait 400ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchInput);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput, onSearchChange]);

  const clearSearch = () => {
    setSearchInput('');
    onSearchChange('');
  };

  return (
    <div
      className="flex flex-col md:flex-row gap-4 mb-12 opacity-0 animate-fadeIn"
      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
    >
      {/* Search input */}
      <div className="relative flex-1 max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full pl-12 pr-10 py-3 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-xl text-ink-900 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 font-body text-sm"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-label="Search blog articles"
        />
        {searchInput && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ink-400 hover:text-ink-600 dark:hover:text-ink-300 transition-colors duration-200"
            aria-label="Clear search"
          >
            <FaTimes className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !activeCategory
              ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
              : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-600 dark:hover:text-accent-400'
          }`}
          aria-label="Show all categories"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id || cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.slug
                ? 'text-white shadow-lg'
                : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-600 dark:hover:text-accent-400'
            }`}
            style={
              activeCategory === cat.slug
                ? { backgroundColor: cat.color || '#f97316', boxShadow: `0 10px 25px -5px ${cat.color || '#f97316'}40` }
                : {}
            }
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
