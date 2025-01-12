module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm run preview',
      url: [
        'http://localhost:4173/',
        'http://localhost:4173/components/button/',
        'http://localhost:4173/components/card/',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // 성능 메트릭
        'first-contentful-paint': ['error', { maxNumericValue: 1000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],

        // 웹 컴포넌트 관련
        'custom-elements-manifest': 'error',
        'uses-responsive-images': 'error',
        'dom-size': ['error', { maxNumericValue: 1500 }],

        // 접근성
        'button-name': 'error',
        'color-contrast': 'error',
        'html-has-lang': 'error',
        'link-name': 'error',

        // 모범 사례
        'no-document-write': 'error',
        'no-vulnerable-libraries': 'error',
        'uses-https': 'error',
        'uses-text-compression': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};