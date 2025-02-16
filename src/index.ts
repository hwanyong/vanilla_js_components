// 컴포넌트 정의를 위한 별도 함수
async function defineComponents() {
  console.log('[Index] Starting component definitions');

  // Ripple을 먼저 정의
  const { Ripple } = await import('./components/ripple/ripple.element');
  if (!customElements.get('vnl-ripple')) {
    console.log('[Index] Defining vnl-ripple');
    customElements.define('vnl-ripple', Ripple);
    await customElements.whenDefined('vnl-ripple');
    console.log('[Index] vnl-ripple defined successfully');
  }

  // Button은 Ripple이 정의된 후에 정의
  const { Button } = await import('./components/button/button.element');
  if (!customElements.get('vnl-button')) {
    console.log('[Index] Defining vnl-button');
    customElements.define('vnl-button', Button);
    await customElements.whenDefined('vnl-button');
    console.log('[Index] vnl-button defined successfully');
  }
}

// 컴포넌트 정의 실행
defineComponents().catch(console.error);

// 컴포넌트 내보내기
export * from './components/ripple/ripple.element';
export * from './components/button/button.element';
export type { UI } from './types';
