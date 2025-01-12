# AI Prompts for Build and Deployment Phase

## Purpose
이 문서는 빌드 및 배포 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Build Configuration

### Build Setup
```prompt
빌드 설정을 구성해주세요:
1. Rollup 설정
2. 번들 최적화
3. 소스맵 생성
4. 환경별 설정
5. 빌드 스크립트

build-deploy.md의 빌드 가이드라인을 따라주세요.
```

### Bundle Analysis
```prompt
번들 분석을 수행해주세요:
1. 번들 크기 분석
2. 트리쉐이킹 효과 확인
3. 코드 분할 최적화
4. 외부 의존성 분석
5. 성능 병목점 식별

bundle-analysis.md의 분석 기준을 따라주세요.
```

## Distribution

### Package Configuration
```prompt
배포 패키지를 구성해주세요:
1. package.json 설정
2. 번들 포맷 (ESM, UMD)
3. 타입 정의 파일
4. 라이센스 및 메타데이터
5. README 업데이트

배포를 위한 패키지 구성을 완료해주세요.
```

### CDN Setup
```prompt
CDN 배포를 설정해주세요:
1. CDN 번들 생성
2. 버전별 URL 구조
3. 캐시 전략
4. 무결성 해시
5. 폴백 옵션

CDN 배포 요구사항을 준수해주세요.
```

## CI/CD

### GitHub Actions
```prompt
GitHub Actions 워크플로우를 설정해주세요:
1. 빌드 자동화
2. 테스트 실행
3. 문서 생성
4. 배포 자동화
5. 알림 설정

.github/workflows/ 디렉토리의 설정을 따라주세요.
```

### Release Management
```prompt
릴리스 관리 프로세스를 설정해주세요:
1. 버전 관리
2. 체인지로그 생성
3. Git 태그 관리
4. NPM 배포
5. 릴리스 노트

version-management.md의 릴리스 가이드라인을 따라주세요.
```

## Quality Assurance

### Pre-release Checks
```prompt
배포 전 검사를 수행해주세요:
1. 린트 검사
2. 타입 체크
3. 테스트 실행
4. 번들 크기 확인
5. 문서 검증

모든 품질 기준이 충족되는지 확인해주세요.
```

### Post-deployment Verification
```prompt
배포 후 검증을 수행해주세요:
1. CDN 가용성 확인
2. 샘플 프로젝트 테스트
3. 문서 접근성 확인
4. 버전 일관성 검사
5. 성능 모니터링

배포된 버전이 정상적으로 작동하는지 확인해주세요.
```

## Monitoring

### Performance Monitoring
```prompt
성능 모니터링을 설정해주세요:
1. 번들 크기 추적
2. 로딩 성능 측정
3. 사용량 통계
4. 오류 추적
5. 성능 지표 대시보드

performance-testing.md의 모니터링 기준을 따라주세요.
```

### Usage Analytics
```prompt
사용량 분석을 설정해주세요:
1. 컴포넌트 사용 통계
2. 버전별 채택률
3. 오류 발생률
4. 성능 메트릭
5. 사용자 피드백

데이터 수집 및 분석 방법을 구성해주세요.
```