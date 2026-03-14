import { useState, useEffect, useCallback } from 'react';
import {
  getArticles,
  getArticleBySlug,
  getCategories,
  getTags,
  getAuthor,
} from '../services/strapi';

/**
 * Hook for fetching paginated article list with filters.
 * Provides setter functions for page, category, tag, and search.
 *
 * @param {Object} initialFilters - Initial filter state
 * @returns {{ articles, pagination, loading, error, setPage, setCategory, setTag, setSearch, setFilters }}
 */
export function useArticles(initialFilters = {}) {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 9,
    pageCount: 1,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getArticles(filters);
      setArticles(response.data || []);
      setPagination(
        response.meta?.pagination || {
          page: 1,
          pageSize: 9,
          pageCount: 1,
          total: 0,
        }
      );
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setPage = (page) =>
    setFilters((prev) => ({ ...prev, page }));

  const setCategory = (category) =>
    setFilters((prev) => ({ ...prev, category, page: 1 }));

  const setTag = (tag) =>
    setFilters((prev) => ({ ...prev, tag, page: 1 }));

  const setSearch = (search) =>
    setFilters((prev) => ({ ...prev, search, page: 1 }));

  return {
    articles,
    pagination,
    loading,
    error,
    setPage,
    setCategory,
    setTag,
    setSearch,
    setFilters,
  };
}

/**
 * Hook for fetching a single article by slug.
 * Includes cleanup to prevent state updates on unmounted components.
 *
 * @param {string} slug - Article slug from URL params
 * @returns {{ article, loading, error }}
 */
export function useArticle(slug) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    setError(null);

    getArticleBySlug(slug)
      .then((data) => {
        if (!cancelled) setArticle(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { article, loading, error };
}

/**
 * Hook for fetching blog metadata: categories, tags, and author.
 * Fetches all three in parallel for optimal performance.
 *
 * @returns {{ categories, tags, author, loading }}
 */
export function useBlogMeta() {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all([getCategories(), getTags(), getAuthor()])
      .then(([catRes, tagRes, authorRes]) => {
        if (!cancelled) {
          setCategories(catRes.data || []);
          setTags(tagRes.data || []);
          setAuthor(authorRes.data || null);
        }
      })
      .catch(() => {
        // Silently fail — blog meta is non-critical
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, tags, author, loading };
}
