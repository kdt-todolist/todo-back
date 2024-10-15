# todo-back
KDT 스프린트 과제 - to do list

## 📁 폴더 구조
```
todo-back
├─.github
│  └─ISSUE_TEMPLATE   # 깃허브 이슈 작성 템플릿
└─src
    ├─config          # 환경 설정, DB, passport 설정
    ├─controllers     # API 요청 처리
    ├─middlewares     # 요청과 응답 중간에서 동작
    ├─models          # 데이터베이스 모델과 스키마 정의
    ├─routes          # API 엔드 포인트 정의
    └─validators      # 유효성 검사
```

## 🛠 프로젝트 빌드
### .env 추가
```
todo-back
└─src
    └──config
        └─.env
```
### 의존성 패키지 설치
```bash
npm install
```

### 실행
```
npm run dev
```

## 📃 API 문서
### [문서 바로가기](https://documenter.getpostman.com/view/38108587/2sAXxQesGt)

## 👥 팀원
### 김인영
- API 문서 제작
- 엔드 포인트, 컨트롤러 구현

### 차수빈
- OAuth2.0 인증 구현
- JWT 인가 구현

### 황상하
- ERD 제작
- 모델, 스키마 구현