# Bundle Analysis Guide

이 문서는 프로젝트의 번들 크기 분석과 성능 최적화 가이드를 제공합니다.

## 번들 분석 도구

### 설정된 도구
- **rollup-plugin-visualizer**: 번들 크기와 구성을 시각화
- **terser**: 코드 최소화 및 최적화
- **sourcemap**: 디버깅 및 분석 지원

### 분석 명령어

1. **전체 번들 분석**
   ```bash
   pnpm run analyze
   ```
   - 모든 번들 형식(CDN, ESM)에 대한 분석 리포트 생성
   - `bundle-analysis.html` 파일 생성

2. **CDN 번들 분석**
   ```bash
   pnpm run analyze:cdn
   ```
   - CDN 배포용 번들 분석
   - IIFE 형식의 번들 크기 확인
   - 개별 컴포넌트별 분석 리포트

3. **ESM 번들 분석**
   ```bash
   pnpm run analyze:esm
   ```
   - ESM 모듈 형식 분석
   - Tree-shaking 효과 확인
   - 모듈별 크기 분석

## 분석 리포트

### 생성되는 파일
- `bundle-analysis.html`: 전체 번들 분석
- `bundle-analysis-{component}.html`: 개별 컴포넌트 분석
- `bundle-analysis-esm.html`: ESM 모듈 분석

### 분석 지표
1. **크기 정보**
   - Raw Size: 원본 크기
   - Gzip Size: Gzip 압축 후 크기
   - Brotli Size: Brotli 압축 후 크기

2. **모듈 구성**
   - 외부 의존성 비중
   - 내부 모듈 크기
   - 중복 코드 검출

3. **Tree-shaking 분석**
   - 사용되지 않는 코드 검출
   - 모듈 간 의존성 그래프
   - 최적화 가능 영역 식별

## 최적화 가이드

### 1. 번들 크기 최적화
- 불필요한 의존성 제거
- 코드 스플리팅 활용
- Tree-shaking 최적화

### 2. 로딩 성능 개선
- 동적 임포트 활용
- 코드 분할 전략 수립
- 프리로딩/프리페칭 적용

### 3. 캐싱 전략
- 장기 캐싱 활용
- 해시 기반 파일명
- 청크 분할 최적화

## 모니터링

### 1. 정기적인 분석
- 새로운 컴포넌트 추가 시 분석
- 주요 버전 업데이트 전 검토
- 성능 회귀 테스트

### 2. 임계값 설정
- 전체 번들 크기: 최대 100KB (gzip)
- 개별 컴포넌트: 최대 20KB (gzip)
- 초기 로딩 시간: 최대 2초

### 3. 최적화 우선순위
1. 초기 로딩 크기 감소
2. 개별 컴포넌트 최적화
3. 트리쉐이킹 개선
4. 코드 스플리팅 적용

## CI/CD 통합

### GitHub Actions에서 번들 분석
```yaml
- name: Analyze Bundle
  run: |
    pnpm run analyze
    # 결과를 아티팩트로 저장
    mkdir -p bundle-analysis
    mv bundle-analysis*.html bundle-analysis/

- name: Upload Analysis Results
  uses: actions/upload-artifact@v4
  with:
    name: bundle-analysis
    path: bundle-analysis
```

### 자동화된 검사
- PR 시 번들 크기 변화 확인
- 임계값 초과 시 경고
- 히스토리 트래킹

## 실제 사용 예시

### 1. 번들 크기 문제 해결
```javascript
// 문제: 큰 외부 라이브러리
import { huge } from 'huge-lib';  // 100KB

// 해결: 부분 임포트
import { tiny } from 'huge-lib/tiny';  // 10KB

// 또는 동적 임포트
const huge = await import('huge-lib/huge');
```

### 2. 코드 스플리팅 예시
```javascript
// 문제: 모든 컴포넌트를 한 번에 로드
import { Button, Card, Table } from '@csdriveninsight/ui';

// 해결: 필요한 컴포넌트만 동적 로드
const Button = await import('@csdriveninsight/ui/button');
```

### 3. Tree Shaking 최적화
```javascript
// 문제: 사용하지 않는 코드 포함
import * as utils from './utils';

// 해결: 필요한 함수만 임포트
import { usedFunction } from './utils';
```

## 문제 해결 가이드

### 1. 큰 번들 크기
- 원인: 불필요한 의존성, 중복 코드
- 해결:
  1. 의존성 분석 및 제거
  2. 코드 스플리팅 적용
  3. Tree Shaking 최적화

### 2. 느린 초기 로딩
- 원인: 큰 초기 번들, 비효율적인 로딩
- 해결:
  1. 컴포넌트 지연 로딩
  2. 프리로딩 적용
  3. 캐시 전략 수립

### 3. 메모리 누수
- 원인: 해제되지 않은 리소스, 순환 참조
- 해결:
  1. 컴포넌트 정리 코드 추가
  2. WeakMap/WeakSet 사용
  3. 이벤트 리스너 정리