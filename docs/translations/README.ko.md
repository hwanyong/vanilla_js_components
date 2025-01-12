# @csdriveninsight/ui

NextUI와 shadcn/ui에서 영감을 받은 바닐라 JavaScript UI 컴포넌트 라이브러리입니다.

## 특징

- 🚫 프레임워크 없는 순수 웹 컴포넌트
- 📦 개별 컴포넌트 임포트 지원
- 🎨 커스터마이징 가능한 테마
- ⚡ 최적화된 성능 (각 컴포넌트 20KB 미만)
- 🔍 TypeScript 지원
- ♿ 접근성 (WCAG 2.1) 준수
- 📱 반응형 디자인

## 설치

```bash
# npm
npm install @csdriveninsight/ui

# pnpm
pnpm add @csdriveninsight/ui

# yarn
yarn add @csdriveninsight/ui
```

## 사용법

### ESM

```javascript
// 전체 라이브러리 임포트
import '@csdriveninsight/ui';

// 개별 컴포넌트 임포트
import '@csdriveninsight/ui/components/button';
```

### CDN

```html
<!-- 전체 라이브러리 -->
<script src="https://cdn.csdriveninsight.com/ui.min.js"></script>

<!-- 개별 컴포넌트 -->
<script src="https://cdn.csdriveninsight.com/components/button.min.js"></script>
```

## 예제

```html
<!-- 버튼 컴포넌트 -->
<ui-button variant="solid" size="md">
  Click me
</ui-button>

<!-- 카드 컴포넌트 -->
<ui-card>
  <h2 slot="header">카드 제목</h2>
  <p>카드 내용이 여기에 들어갑니다.</p>
  <div slot="footer">
    <ui-button variant="outline">자세히 보기</ui-button>
  </div>
</ui-card>
```

## 개발 환경

### 요구사항
- Node.js v20 이상
- pnpm v8 이상

### 설정
```bash
# 저장소 복제
git clone https://github.com/hwanyong/vanilla_components.git
cd vanilla_components

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```

### 사용 가능한 스크립트
- `pnpm run dev`: 개발 서버 실행
- `pnpm run build`: 프로덕션 빌드
- `pnpm run test`: 테스트 실행
- `pnpm run lint`: 코드 린트
- `pnpm run format`: 코드 포맷팅
- `pnpm run docs`: 문서 생성

## 문서

자세한 문서는 다음 위치에서 확인할 수 있습니다:
- [컴포넌트 API](https://docs.csdriveninsight.com/api)
- [개발 가이드](https://docs.csdriveninsight.com/guide)
- [예제](https://docs.csdriveninsight.com/examples)

## 커뮤니티 & 지원
- [Discord 커뮤니티](https://discord.gg/KcqHTZS35c)
- [블로그](https://blog.hwanyong.com)
- [YouTube 채널](https://youtube.com/@uhd_tech)

## 기여하기

1. 프로젝트를 Fork 합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/멋진기능`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: 멋진 기능 추가'`)
4. 브랜치에 Push 합니다 (`git push origin feature/멋진기능`)
5. Pull Request를 생성합니다

## 번역
- [English](../../README.md)

## 라이선스

MIT © [Hwanyong Yoo](https://github.com/hwanyong)