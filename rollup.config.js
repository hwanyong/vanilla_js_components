/* eslint-env node */
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { visualizer } from 'rollup-plugin-visualizer';

// 개발 모드 확인
const dev = Boolean(process.env.ROLLUP_WATCH);

// 개별 컴포넌트 목록
const components = [
  'button',
  // ... 추가 컴포넌트
];

// TypeScript 플러그인 설정
const createTypescriptPlugin = (format) => typescript({
  tsconfig: './tsconfig.json',
  declaration: true,
  declarationDir: `dist/${format}`,
  include: ['src/**/*.ts'],
  sourceMap: true,
  module: 'ESNext',
});

// 개발 서버 플러그인
const devPlugins = dev
  ? [
      serve({
        open: true,
        contentBase: ['.', 'dist'],
        port: 3000,
      }),
      livereload({
        watch: ['dist', 'src/components', '.'],
      }),
    ]
  : [];

// ESM 모듈 설정
const esmConfig = {
  input: {
    index: 'src/index.ts',
    ...components.reduce((acc, component) => ({
      ...acc,
      [component]: `src/components/${component}/${component}.element.ts`
    }), {})
  },
  output: {
    dir: 'dist/esm',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    createTypescriptPlugin('esm'),
    ...devPlugins
  ]
};

// CJS 모듈 설정
const cjsConfig = {
  input: {
    index: 'src/index.ts',
    ...components.reduce((acc, component) => ({
      ...acc,
      [component]: `src/components/${component}/${component}.element.ts`
    }), {})
  },
  output: {
    dir: 'dist/cjs',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    createTypescriptPlugin('cjs'),
  ]
};

// CDN 번들 설정
const cdnConfig = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/cdn',
    entryFileNames: 'ui.min.js',
    format: 'iife',
    name: 'UI',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    createTypescriptPlugin('cdn'),
    terser(),
    visualizer({
      filename: 'bundle-analysis-cdn.html',
      gzipSize: true,
      brotliSize: true,
    })
  ]
};

// 개별 컴포넌트 CDN 설정
const componentCdnConfigs = components.map(component => ({
  input: `src/components/${component}/${component}.element.ts`,
  output: {
    dir: `dist/cdn/components`,
    entryFileNames: `${component}.min.js`,
    format: 'iife',
    name: `UI${component.charAt(0).toUpperCase() + component.slice(1)}`,
    sourcemap: true,
  },
  plugins: [
    resolve(),
    createTypescriptPlugin(`cdn/components/${component}`),
    terser(),
    visualizer({
      filename: `bundle-analysis-${component}.html`,
      gzipSize: true,
      brotliSize: true,
    })
  ]
}));

// 개발 모드에서는 ESM 빌드만 실행
export default dev
  ? [esmConfig]
  : [esmConfig, cjsConfig, cdnConfig, ...componentCdnConfigs];