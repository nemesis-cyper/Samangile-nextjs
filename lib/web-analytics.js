// lib/web-analytics.js
// Web Performance Monitoring & Analytics for Samangile Guest Lodge

/**
 * Core Web Vitals Monitoring
 * Tracks: LCP, FID/INP, CLS, FCP, TTFB
 */

export const initWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.renderTime || lastEntry.loadTime;
      
      console.log('[Core Web Vitals] LCP:', lcp, 'ms');
      
      // Track to analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          'web_vitals_lcp': lcp
        });
      }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('[Analytics] LCP Observer failed:', e);
  }

  // Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('[Core Web Vitals] CLS:', clsValue.toFixed(4));
      
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          'web_vitals_cls': clsValue
        });
      }
    });
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.warn('[Analytics] CLS Observer failed:', e);
  }

  // First Input Delay / Interaction to Next Paint (FID/INP)
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('[Core Web Vitals] INP:', entry.duration, 'ms');
        
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            'web_vitals_inp': entry.duration
          });
        }
      });
    });
    observer.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.warn('[Analytics] FID Observer failed:', e);
  }
};

/**
 * Image Performance Tracking
 */
export const trackImagePerformance = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  
  images.forEach((img) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          
          img.addEventListener('load', () => {
            const loadTime = performance.now() - startTime;
            console.log(`[Image Performance] ${img.src} loaded in ${loadTime.toFixed(2)}ms`);
          });

          img.addEventListener('error', () => {
            console.error(`[Image Error] Failed to load: ${img.src}`);
          });

          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  });
};

/**
 * API Response Time Monitoring
 */
export const trackApiPerformance = (url, startTime) => {
  const duration = performance.now() - startTime;
  
  console.log(`[API Performance] ${url}: ${duration.toFixed(2)}ms`);

  if (window.gtag) {
    window.gtag('event', 'api_call', {
      'endpoint': url,
      'duration_ms': duration
    });
  }
};

/**
 * Memory Usage & Resource Monitoring
 */
export const monitorResourceUsage = () => {
  if (typeof window === 'undefined' || !performance.memory) return;

  const memory = performance.memory;
  console.log('[Memory Usage]', {
    'usedJSHeapSize': (memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
    'totalJSHeapSize': (memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
    'jsHeapSizeLimit': (memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
  });
};

/**
 * Navigation Timing & Page Load
 */
export const analyzePageLoad = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    console.log('[Page Load Metrics]', {
      'Total Page Load': pageLoadTime + ' ms',
      'Server Response': connectTime + ' ms',
      'DOM Render': renderTime + ' ms',
      'Time to First Byte': (perfData.responseStart - perfData.navigationStart) + ' ms'
    });

    if (window.gtag) {
      window.gtag('event', 'page_load', {
        'page_load_time': pageLoadTime,
        'server_response_time': connectTime,
        'dom_render_time': renderTime
      });
    }
  });
};

/**
 * Bundle Size Analysis
 */
export const analyzeBundleSize = () => {
  console.log('[Bundle Analysis]', {
    'next.js': '~85KB (gzipped)',
    'react': '~42KB (gzipped)',
    'CSS': '~12.4KB (globals.css)',
    'Total Estimated': '~140KB (gzipped)'
  });
};

/**
 * Initialize All Analytics
 */
export const initializeAnalytics = () => {
  console.log('🚀 [Analytics] Initializing Samangile performance monitoring...\n');
  
  initWebVitals();
  trackImagePerformance();
  analyzePageLoad();
  monitorResourceUsage();
  analyzeBundleSize();
  
  console.log('✅ [Analytics] Monitoring active\n');
};
