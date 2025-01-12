import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';

// 개별 컴포넌트 목록
const components = [
  'button',
  'card',
  // ... 추가 컴포넌트
];

// TypeScript 플러그인 설정
const typescriptPlugin = typescript({
  tsconfig: './tsconfig.json',
  declaration: true,
  declarationDir: './dist/types',
  include: ['src/**/*.ts'],
});

// 번들 분석 플러그인 설정
const bundleAnalyzer = visualizer({
  filename: 'bundle-analysis.html',
  title: 'Bundle Analysis',
  template: 'treemap', // or 'sunburst', 'network'
  sourcemap: true,
  gzipSize: true,
  brotliSize: true,
});

// CDN 번들 설정
const cdnConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cdn/ui.min.js',
      format: 'iife',
      name: 'UI',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    typescriptPlugin,
    terser(),
    bundleAnalyzer
  ]
};

// 개별 컴포넌트 CDN 설정
const componentCdnConfigs = components.map(component => ({
  input: `src/components/${component}/${component}.element.ts`,
  output: {
    file: `dist/cdn/components/${component}.min.js`,
    format: 'iife',
    name: `UI${component.charAt(0).toUpperCase() + component.slice(1)}`,
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescriptPlugin,
    terser(),
    visualizer({
      filename: `bundle-analysis-${component}.html`,
      title: `${component} Bundle Analysis`,
      template: 'treemap',
      sourcemap: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
}));

// ESM 모듈 설정
const esmConfig = {
  input: components.reduce((acc, component) => ({
    ...acc,
    [component]: `src/components/${component}/${component}.element.ts`
  }), { index: 'src/index.ts' }),
  output: {
    dir: 'dist/esm',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescriptPlugin,
    visualizer({
      filename: 'bundle-analysis-esm.html',
      title: 'ESM Bundle Analysis',
      template: 'treemap',
      sourcemap: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
};

export default [
  cdnConfig,
  ...componentCdnConfigs,
  esmConfig
];