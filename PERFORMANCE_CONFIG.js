// Performance optimization configurations

// Image optimization settings
const imageOptimization = {
  logo: {
    format: 'png',
    quality: 90,
    loading: 'lazy',
    priority: false
  },
  hero: {
    format: 'webp',
    quality: 85,
    loading: 'eager',
    priority: true
  }
};

// Component lazy loading configuration
const lazyLoadingConfig = {
  brandsShowcase: {
    threshold: 0.1,
    rootMargin: '50px'
  },
  footer: {
    threshold: 0.2,
    rootMargin: '100px'
  }
};

// Bundle optimization
const bundleOptimization = {
  codeSplitting: true,
  treeShaking: true,
  minification: true,
  compression: 'gzip'
};

// Caching strategy
const cachingStrategy = {
  static: '1y',
  images: '30d',
  api: '5m'
};

export { imageOptimization, lazyLoadingConfig, bundleOptimization, cachingStrategy };
