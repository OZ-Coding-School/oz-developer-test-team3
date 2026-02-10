# 개발 컨벤션 가이드

## 목차

- [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
- [브랜치명 컨벤션](#브랜치명-컨벤션)
- [PR Title 컨벤션](#pr-title-컨벤션)
- [Git Flow](#git-flow)

---

## 커밋 메시지 컨벤션

### 형식

```
<type>: <subject>

[body]

[footer]
```

### Type

| Type       | 설명                                  |
| ---------- | ------------------------------------- |
| `feat`     | 새로운 기능 추가                      |
| `fix`      | 버그 수정                             |
| `docs`     | 문서 수정                             |
| `style`    | 코드 포맷팅 (세미콜론, 들여쓰기 등)   |
| `refactor` | 코드 리팩토링 (기능 변경 없음)        |
| `test`     | 테스트 코드 추가/수정                 |
| `chore`    | 빌드, 패키지 매니저 설정 등 기타 변경 |
| `perf`     | 성능 개선                             |
| `ci`       | CI/CD 설정 변경                       |
| `revert`   | 이전 커밋 되돌리기                    |

### 작성 규칙

- subject는 50자 이내로 작성
- 마침표 사용하지 않음
- 명령문으로 작성 (예: "추가한다" X, "추가" O)
- body는 선택사항, 72자마다 줄바꿈
- footer는 이슈 트래킹 번호 참조 시 사용

### 예시

```
feat: 로그인 폼 유효성 검사 추가

- 이메일 형식 검증 로직 구현
- 비밀번호 최소 길이 검증 추가

Closes #123
```

```
fix: 토큰 갱신 시 요청 큐 처리 오류 수정
```

```
chore: eslint 설정 업데이트
```

---

## 브랜치명 컨벤션

### 형식

```
<type>/<issue-number>-<short-description>
```

### Type

| Type       | 설명                        |
| ---------- | --------------------------- |
| `feature`  | 새로운 기능 개발            |
| `fix`      | 버그 수정                   |
| `hotfix`   | 긴급 버그 수정 (production) |
| `refactor` | 코드 리팩토링               |
| `docs`     | 문서 작업                   |
| `test`     | 테스트 관련 작업            |
| `chore`    | 기타 작업                   |

### 작성 규칙

- 소문자만 사용
- 단어 구분은 하이픈(`-`) 사용
- 간결하고 명확하게 작성

### 예시

```
feature/123-user-login
fix/456-token-refresh-error
hotfix/789-payment-critical-bug
refactor/321-api-layer-cleanup
docs/654-readme-update
```

---

## PR Title 컨벤션

### 형식

```
[<Type>] <간결한 설명>
```

### Type

커밋 메시지의 Type과 동일하게 사용

### 작성 규칙

- 대괄호 안에 Type 명시
- 설명은 명확하고 간결하게
- 50자 이내 권장

### 예시

```
[Feat] 사용자 로그인 기능 구현
[Fix] 토큰 갱신 시 요청 실패 오류 수정
[Refactor] API 레이어 구조 개선
[Docs] 컨벤션 가이드 문서 추가
[Chore] ESLint 설정 업데이트
```

---

## Git Flow

### 브랜치 구조

```
main (production)
  └── develop
        ├── feature/xxx
        ├── fix/xxx
        └── refactor/xxx
```

### 브랜치 설명

| 브랜치    | 설명                           | 병합 대상         |
| --------- | ------------------------------ | ----------------- |
| `main`    | 배포 가능한 상태의 코드        | -                 |
| `develop` | 다음 릴리스를 위한 개발 브랜치 | `main`            |
| `feature` | 새 기능 개발                   | `develop`         |
| `fix`     | 버그 수정                      | `develop`         |
| `hotfix`  | 긴급 수정 (production 버그)    | `main`, `develop` |

### 작업 흐름

#### 1. 새 기능 개발

```bash
# develop에서 feature 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b feature/123-new-feature

# 작업 후 커밋
git add .
git commit -m "feat: 새 기능 구현"

# develop에 PR 생성
git push origin feature/123-new-feature
# GitHub에서 develop으로 PR 생성
```

#### 2. 버그 수정

```bash
# develop에서 fix 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b fix/456-bug-description

# 수정 후 커밋
git add .
git commit -m "fix: 버그 수정"

# develop에 PR 생성
git push origin fix/456-bug-description
```

#### 3. 긴급 수정 (Hotfix) - 정말 필요한 상황에만 진행 (참고용)

```bash
# main에서 hotfix 브랜치 생성
git checkout main
git pull origin main
git checkout -b hotfix/789-critical-fix

# 수정 후 커밋
git add .
git commit -m "fix: 긴급 버그 수정"

# main과 develop 모두에 PR 생성
git push origin hotfix/789-critical-fix
```

#### 4. 릴리스 (참고용)

```bash
# develop을 main에 병합
git checkout main
git pull origin main
git merge develop
git push origin main
```

### PR 규칙

1. 최소 1명 이상의 리뷰어 승인 필요
2. CI 통과 필수
3. 병합 후 원격 브랜치 삭제
