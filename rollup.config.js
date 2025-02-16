/* eslint-env node */
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// 개발 모드 확인
const dev = Boolean(process.env.ROLLUP_WATCH);

// 개별 컴포넌트 목록
const components = [
  'button',
  // ... 추가 컴포넌트
];

// TypeScript 플러그인 설정
const createTypescriptPlugin = (outDir) => typescript({
  tsconfig: './tsconfig.json',
  declaration: true,
  declarationDir: outDir + '/types',
  include: ['src/**/*.ts'],
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
    createTypescriptPlugin('./dist/esm'),
    ...devPlugins
  ]
};

// CDN 번들 설정
const cdnConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/cdn/ui.min.js',
    format: 'iife',
    name: 'UI',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    createTypescriptPlugin('./dist/cdn'),
    terser()
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
    createTypescriptPlugin(`./dist/cdn/components/${component}`),
    terser()
  ]
}));

// 개발 모드에서는 ESM 빌드만 실행
export default dev
  ? [esmConfig]
  : [esmConfig, cdnConfig, ...componentCdnConfigs];