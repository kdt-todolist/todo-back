# todo-back
KDT 스프린트 과제 - to do list

## 초기 설정
### logs
로그 파일

### src
- `config`: 프로젝트 설정 파일(데이터베이스 연결 정보, 환경 변수 정보)
- `constants`: 상수값 관리
- `controllers`: routes와 분리하여 API 요청을 처리하는 함수 작성
- `middlewares`: 라우트 핸들러에 적용할 미들웨어 함수 작성
- `routes`: API 엔드 포인트 정의
- `models`: 데이터베이스 모델과 스키마 정의
- `services`: 비즈니스 로직
- `app.js`: 서버 기본 설정, 애플리케이션 진입점

## 환경 설정
```
npm install express
```
```
npm install morgan
```
```
npm install mysql2
```
```
npm install http-status-codes
```
```
npm install dotenv
```
```
npm install passport
```