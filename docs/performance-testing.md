# Performance Testing Guide

이 문서는 프로젝트의 성능 테스트 설정과 모니터링 방법을 설명합니다.

## 성능 테스트 도구

### 1. Lighthouse CI
- 웹 성능 메트릭 측정
- 접근성 검사
- 모범 사례 준수 여부 확인
- SEO 점검

### 2. Bundle Analyzer
- 번들 크기 분석
- 의존성 트리 시각화
- 최적화 기회 식별

## Lighthouse CI 설정

### 측정 지표

1. **성능 (Performance)**
   - First Contentful Paint: < 1초
   - Largest Contentful Paint: < 2.5초
   - Total Blocking Time: < 200ms
   - Cumulative Layout Shift: < 0.1

2. **접근성 (Accessibility)**
   - 최소 점수: 90점
   - 필수 검사 항목:
     - 버튼/링크 이름
     - 색상 대비
     - HTML 언어 속성
     - ARIA 속성

3. **모범 사례 (Best Practices)**
   - 최소 점수: 90점
   - 웹 컴포넌트 매니페스트
   - 반응형 이미지
   - DOM 크기 제한
   - 보안 취약점 검사

4. **SEO**
   - 최소 점수: 90점

### 실행 방법

1. **로컬 테스트**
   ```bash
   # 프로젝트 빌드
   pnpm run build

   # Lighthouse CI 실행
   pnpm exec lhci autorun
   ```

2. **CI/CD 파이프라인**
   - PR 생성 시 자동 실행
   - main 브랜치 푸시 시 실행
   - 결과는 GitHub Actions에서 확인

## 번들 분석

### 분석 도구
- rollup-plugin-visualizer
- 소스맵 지원
- Gzip/Brotli 크기 측정

### 실행 방법

1. **전체 분석**
   ```bash
   pnpm run analyze
   ```

2. **CDN 번들 분석**
   ```bash
   pnpm run analyze:cdn
   ```

3. **ESM 모듈 분석**
   ```bash
   pnpm run analyze:esm
   ```

## 성능 임계값

### 1. 번들 크기
- CDN 번들: 최대 100KB (gzip)
- 개별 컴포넌트: 최대 20KB (gzip)
- ESM 모듈: 컴포넌트당 최대 15KB

### 2. 로딩 성능
- First Paint: < 1초
- Time to Interactive: < 3초
- JavaScript 실행 시간: < 150ms

### 3. 런타임 성능
- 프레임 속도: 60fps
- Long Tasks: < 50ms
- 메모리 사용량: < 50MB

## 모니터링 및 최적화

### 1. 정기적인 검사
- PR 마다 자동 검사
- 주간 성능 리포트
- 성능 회귀 모니터링

### 2. 최적화 전략
- 코드 스플리팅
- Tree Shaking
- 지연 로딩
- 리소스 최적화

### 3. 성능 예산
- 초기 로딩 시간
- 번들 크기
- 메모리 사용량
- CPU 사용량

## CI/CD 통합

### GitHub Actions

1. **Lighthouse CI**
   ```yaml
   - name: Run Lighthouse CI
     run: |
       pnpm exec lhci autorun
     env:
       LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
   ```

2. **Bundle Analysis**
   ```yaml
   - name: Analyze Bundle
     run: |
       pnpm run analyze
       mkdir -p bundle-analysis
       mv bundle-analysis*.html bundle-analysis/
   ```

### 결과 확인

1. **Lighthouse 리포트**
   - GitHub Actions 아티팩트
   - Lighthouse CI 서버
   - PR 코멘트

2. **번들 분석**
   - 시각화된 번들 맵
   - 크기 변화 추적
   - 최적화 제안

## 성능 측정 방법

### 1. 컴포넌트 성능 측정
```javascript
// 렌더링 성능 측정
performance.mark('start-render');
const element = document.createElement('ui-button');
document.body.appendChild(element);
performance.mark('end-render');
performance.measure('render-time', 'start-render', 'end-render');

// 이벤트 핸들링 성능 측정
performance.mark('start-event');
element.click();
performance.mark('end-event');
performance.measure('event-time', 'start-event', 'end-event');
```

### 2. 메모리 사용량 측정
```javascript
// Chrome DevTools Memory 탭 사용
// 1. Heap Snapshot
// 2. Allocation Timeline
// 3. Allocation Sampling
```

### 3. 네트워크 성능 측정
```javascript
// Resource Timing API 사용
const resources = performance.getEntriesByType('resource');
const componentLoading = resources.filter(r =>
  r.name.includes('@csdriveninsight/ui')
);
```

## 결과 해석

### 1. Lighthouse 점수 해석
- 90-100: 최적화가 잘 된 상태
- 80-89: 개선이 필요한 부분 존재
- 70-79: 주의가 필요한 상태
- 70 미만: 즉시 개선 필요

### 2. 번들 분석 결과 해석
- 중복 모듈 확인
- Tree Shaking 효과 분석
- 청크 분할 최적화 기회 파악

### 3. 성능 개선 우선순위
1. First Contentful Paint 최적화
2. 번들 크기 감소
3. 런타임 성능 개선
4. 메모리 사용량 최적화