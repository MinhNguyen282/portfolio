import React, { useCallback } from 'react';
import { FaPenNib } from 'react-icons/fa';
import SEO from '../SEO';
import BlogCard from './BlogCard';
import BlogFilters from './BlogFilters';
import BlogPagination from './BlogPagination';
import BlogSkeleton from './BlogSkeleton';
import { useArticles, useBlogMeta } from '../../hooks/useBlog';

const BlogList = () => {
  const {
    articles,
    pagination,
    loading,
    error,
    setPage,
    setCategory,
    setSearch,
  } = useArticles();

  const { categories } = useBlogMeta();

  const [activeCategory, setActiveCategory] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');

  const handleCategoryChange = useCallback(
    (categorySlug) => {
      setActiveCategory(categorySlug);
      setCategory(categorySlug);
    },
    [setCategory]
  );

  const handleSearchChange = useCallback(
    (value) => {
      setSearchValue(value);
      setSearch(value);
    },
    [setSearch]
  );

  return (
    <>
      <SEO
        title="Blog - Minh's Portfolio"
        description="Read my thoughts on software development, backend architecture, Spring Boot, React, and more. Articles about web development, system design, and engineering best practices."
        keywords="blog, software engineering, spring boot, nodejs, reactjs, web development, tutorials, backend, system design"
        url="/blog"
        type="blog"
      />

      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        {/* Background decorative elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
          {/* Header */}
          <header className="mb-16">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              {/* Icon badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl shadow-lg shadow-accent-500/25">
                  <FaPenNib className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-500 font-medium">
                  Blog
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight">
                Thoughts &
                <span className="block gradient-text">Insights</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-2xl leading-relaxed">
                Sharing what I learn about software engineering, backend architecture,
                and building great products. From deep dives to quick tips.
              </p>
            </div>
          </header>

          {/* Filters */}
          <BlogFilters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            search={searchValue}
            onSearchChange={handleSearchChange}
          />

          {/* Error state */}
          {error && (
            <div className="text-center py-16 opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">
                  Unable to load articles. Please check if the blog service is running.
                </span>
              </div>
            </div>
          )}

          {/* Loading state */}
          {loading && !error && <BlogSkeleton count={6} />}

          {/* Articles grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <BlogCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20 opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 bg-ink-100 dark:bg-ink-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPenNib className="w-8 h-8 text-ink-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-100 mb-3">
                No articles found
              </h3>
              <p className="text-ink-600 dark:text-ink-400 max-w-md mx-auto">
                {searchValue || activeCategory
                  ? 'Try adjusting your filters or search terms.'
                  : 'Blog posts are coming soon. Stay tuned!'}
              </p>
              {(searchValue || activeCategory) && (
                <button
                  onClick={() => {
                    handleSearchChange('');
                    handleCategoryChange(null);
                  }}
                  className="mt-6 px-6 py-3 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && articles.length > 0 && (
            <BlogPagination pagination={pagination} onPageChange={setPage} />
          )}
        </div>
      </section>
    </>
  );
};

export default BlogList;
