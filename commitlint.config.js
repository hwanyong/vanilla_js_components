export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 수정
        'style',    // 코드 스타일 변경 (포맷팅 등)
        'refactor', // 리팩토링
        'test',     // 테스트 추가/수정
        'chore',    // 빌드 프로세스 변경, 패키지 매니저 설정 등
        'perf',     // 성능 개선
        'revert',   // 이전 커밋으로 되돌리기
      ],
    ],
    'type-case': [2, 'always', 'lowercase'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lowercase'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],
  },
};