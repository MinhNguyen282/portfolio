import React, { useState, useRef, useEffect } from 'react';

/**
 * Image with IntersectionObserver-based lazy loading.
 *
 * Pass `priority` for above-the-fold images (the hero avatar): it skips the
 * observer entirely and loads eagerly at high fetch priority. Lazy-loading an
 * LCP element delays it until React has hydrated and the observer has fired,
 * which is exactly the wrong trade for something already in the viewport.
 *
 * `webpSrcSet` renders a <picture> so modern browsers get WebP while `src`
 * stays the universal fallback. `width`/`height` reserve layout space so the
 * image cannot shift the page as it loads.
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = '/placeholder-image.jpg',
  loadingClassName = 'animate-pulse bg-gray-200 dark:bg-gray-700',
  priority = false,
  webpSrcSet,
  srcSet,
  sizes,
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (priority) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const image = (
    <img
      src={hasError ? placeholder : src}
      srcSet={hasError ? undefined : srcSet}
      sizes={hasError ? undefined : sizes}
      alt={alt}
      width={width}
      height={height}
      onLoad={handleLoad}
      onError={handleError}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      // React 18 does not yet map fetchPriority, so set the DOM attribute name.
      fetchpriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
    />
  );

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${loadingClassName}`}>
          <div className="flex items-center justify-center h-full">
            <svg
              className="w-8 h-8 text-gray-400 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView &&
        (webpSrcSet && !hasError ? (
          <picture>
            <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
            {image}
          </picture>
        ) : (
          image
        ))}

      {/* Error state */}
      {hasError && isLoaded && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
