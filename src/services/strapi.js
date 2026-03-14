const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API = `${STRAPI_URL}/api`;

/**
 * Generic fetch wrapper for Strapi v5 REST API.
 * Handles query string construction with Strapi's LHS bracket syntax.
 */
async function fetchAPI(endpoint, params = {}) {
  const queryString = buildQueryString(params);
  const url = `${STRAPI_API}${endpoint}${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Build query string from params object using Strapi's LHS bracket notation.
 * Supports: populate, fields, filters, sort, pagination, status.
 */
function buildQueryString(params) {
  const searchParams = new URLSearchParams();

  // populate — string, array, or object (deep populate)
  if (params.populate) {
    if (typeof params.populate === 'string') {
      searchParams.append('populate', params.populate);
    } else if (Array.isArray(params.populate)) {
      params.populate.forEach((field, i) => {
        searchParams.append(`populate[${i}]`, field);
      });
    }
  }

  // fields — select specific fields only
  if (params.fields) {
    params.fields.forEach((field, i) => {
      searchParams.append(`fields[${i}]`, field);
    });
  }

  // filters — recursive bracket notation
  if (params.filters) {
    appendFilters(searchParams, params.filters, 'filters');
  }

  // sort — array or single string
  if (params.sort) {
    if (Array.isArray(params.sort)) {
      params.sort.forEach((s, i) => {
        searchParams.append(`sort[${i}]`, s);
      });
    } else {
      searchParams.append('sort', params.sort);
    }
  }

  // pagination — page, pageSize, etc.
  if (params.pagination) {
    Object.entries(params.pagination).forEach(([key, value]) => {
      searchParams.append(`pagination[${key}]`, value);
    });
  }

  // status — Draft & Publish filter
  if (params.status) {
    searchParams.append('status', params.status);
  }

  return searchParams.toString();
}

/**
 * Recursively append filter params with bracket notation.
 * e.g. { category: { slug: { $eq: 'tech' } } } → filters[category][slug][$eq]=tech
 */
function appendFilters(searchParams, filters, prefix) {
  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      appendFilters(searchParams, value, `${prefix}[${key}]`);
    } else {
      searchParams.append(`${prefix}[${key}]`, value);
    }
  });
}

// ─── Utilities ──────────────────────────────────────────────────

/**
 * Get the full URL for a Strapi media asset.
 * Handles:
 *  - Arrays (Strapi v5 returns single-media as [obj] when using populate=*)
 *  - Objects with .url property
 *  - Plain URL strings
 *  - Absolute URLs (cloud storage) and relative URLs (local uploads)
 */
export function getStrapiMediaUrl(media) {
  if (!media) return null;

  // Strapi v5 may return single-media fields as an array
  if (Array.isArray(media)) {
    if (media.length === 0) return null;
    media = media[0];
  }

  const url = media.url || media;
  if (typeof url !== 'string') return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Calculate reading time from content string (Markdown/HTML).
 * Falls back to 1 min minimum.
 */
export function calculateReadingTime(content) {
  if (!content) return 1;
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]+>/g, '').replace(/[#*_~`]/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Format a date string into a human-readable format.
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ─── Article APIs ───────────────────────────────────────────────

/**
 * Fetch paginated articles list with optional filters.
 * @param {Object} options - { page, pageSize, category, tag, search, featured }
 * @returns {Promise<{ data: Article[], meta: { pagination } }>}
 */
export async function getArticles({
  page = 1,
  pageSize = 9,
  category,
  tag,
  search,
  featured,
} = {}) {
  const params = {
    populate: ['cover', 'category', 'tags'],
    sort: ['publishedAt:desc'],
    pagination: { page, pageSize },
    status: 'published',
    fields: ['title', 'slug', 'excerpt', 'publishedAt', 'readingTime', 'featured'],
  };

  const filters = {};

  if (category) {
    filters.category = { slug: { $eq: category } };
  }

  if (tag) {
    filters.tags = { slug: { $eq: tag } };
  }

  if (search) {
    filters.$or = [
      { title: { $containsi: search } },
      { excerpt: { $containsi: search } },
    ];
  }

  if (featured !== undefined) {
    filters.featured = { $eq: featured };
  }

  if (Object.keys(filters).length > 0) {
    params.filters = filters;
  }

  return fetchAPI('/articles', params);
}

/**
 * Fetch a single article by its slug. Returns full content.
 * @param {string} slug
 * @returns {Promise<Article|null>}
 */
export async function getArticleBySlug(slug) {
  const params = {
    populate: ['cover', 'category', 'tags'],
    filters: { slug: { $eq: slug } },
    status: 'published',
  };

  const response = await fetchAPI('/articles', params);
  return response.data?.[0] || null;
}

// ─── Category APIs ──────────────────────────────────────────────

/**
 * Fetch all categories with article count.
 */
export async function getCategories() {
  return fetchAPI('/categories', {
    sort: ['name:asc'],
    fields: ['name', 'slug', 'description', 'color'],
  });
}

// ─── Tag APIs ───────────────────────────────────────────────────

/**
 * Fetch all tags.
 */
export async function getTags() {
  return fetchAPI('/tags', {
    sort: ['name:asc'],
    fields: ['name', 'slug'],
  });
}

// ─── Author API ─────────────────────────────────────────────────

/**
 * Fetch the author profile (collection type — returns first published entry).
 */
export async function getAuthor() {
  const res = await fetchAPI('/authors', {
    populate: ['avatar'],
    pagination: { page: 1, pageSize: 1 },
    status: 'published',
  });
  // Return shape { data: <author object> } to match useBlogMeta's authorRes.data access
  return { data: res.data?.[0] || null };
}
