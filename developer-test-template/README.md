# 나는 어떤 개발자일까?

개발자 유형 테스트를 제공하는 사이드 프로젝트입니다.

## 시작하기

### 요구 사항

- Node.js 18+
- pnpm

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build
```

### 패키지 관리

```bash
# 패키지 추가
pnpm add <패키지명>

# 개발 의존성으로 추가
pnpm add -D <패키지명>

# 패키지 삭제
pnpm remove <패키지명>
```

### 환경 변수

`.env` 파일을 생성하고 다음 변수를 설정하세요:

```
VITE_API_URL=<API 서버 주소>
```

## 기술 스택

| 분류        | 기술                        |
| ----------- | --------------------------- |
| Framework   | React 19, Vite 7            |
| Styling     | Tailwind CSS 4              |
| Routing     | React Router 7              |
| 서버 상태   | TanStack React Query        |
| 클라이언트 상태 | Zustand                 |
| HTTP Client | Axios                       |
| Animation   | Motion                      |
| Mock        | MSW                         |

## 프로젝트 구조

```
src/
├── api/           # Axios 인스턴스, 인터셉터, API 서비스
├── components/    # React 컴포넌트 (common/ 공통 컴포넌트)
├── hooks/         # 커스텀 훅 (queries/, mutations/)
├── lib/           # 설정 및 유틸리티
├── pages/         # 페이지 컴포넌트
├── store/         # Zustand 스토어
└── utils/         # 유틸리티 함수
```

## 코드 품질

- **ESLint**: React Hooks, TanStack Query 플러그인 적용
- **Prettier**: Tailwind 클래스 자동 정렬
- **Husky**: pre-commit 훅으로 lint-staged 실행

## 협업 가이드

컨벤션 문서는 [docs/CONVENTIONS.md](./docs/CONVENTIONS.md)를 참고하세요.

- 커밋 메시지 컨벤션
- 브랜치명 컨벤션
- PR Title 컨벤션
- Git Flow
