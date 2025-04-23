# GPT-Figma Automation

GPT의 디자인 요청을 실시간으로 처리하여  
 **Figma 도면에 자동으로 주석(comment)을 생성**하는 Node.js 기반 백엔드 프로젝트입니다.

>  프론트엔드 없이 작동하며, Postman, curl, Custom GPT 등으로 직접 API를 호출할 수 있습니다.

---

##  주요 기능

-  GPT 또는 사용자의 입력으로 디자인 요청 수신
-  Node.js Express 서버가 Figma API를 호출
-  Figma 파일에 주석(comment) 자동 생성
-  테스트 및 배포까지 가능한 백엔드 자동화 구조

---

##  아키텍처 구성

   사용자 or GPT 요청 
       ↓ 
 [ Express API 서버 ]
       ↓ 
[ Figma API (files/:file_id/comments) ] 
       ↓
Figma 도면 주석(comment) 생성

---

## ⚙️ 기술 스택

- Node.js + Express + TypeScript
- Figma REST API
- dotenv (환경 변수 관리)
- axios (API 호출)
- winston (로그 관리)

---

## 📁 프로젝트 구조

gpt-figma-automation/ ├── src/ │ ├── index.ts # 서버 실행 진입점 │ ├── routes/figma.route.ts # 라우터 │ ├── controllers/figma.controller.ts │ ├── services/figma.service.ts │ ├── utils/figmaClient.ts # Figma API 호출 │ └── utils/logger.ts ├── .env # 환경 변수 ├── package.json


---

##  시작하기

### 1. 프로젝트 클론

```
git clone https://github.com/your-id/gpt-figma-automation.git
cd gpt-figma-automation
2. 의존성 설치
npm install
3. 환경 변수 설정
.env 파일을 생성하고 다음 정보를 입력합니다:

FIGMA_API_TOKEN=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIGMA_FILE_ID=DNCJ7REt2SkQ0jNytR5jDH
PORT=3000
 토큰은 Figma 개발자 페이지에서 생성할 수 있습니다.
 FILE_ID는 Figma 링크의 https://www.figma.com/file/<FILE_ID>/... 에서 추출합니다.

4. 서버 실행
npm run dev
 API 사용법
POST /figma/create-frame
Figma 파일에 GPT 기반 주석을 추가합니다.

 요청 예시
{
  "name": "Hero Section",
  "width": 1440,
  "height": 800
}
 응답 예시
{
  "success": true,
  "data": {
    "message": " GPT 자동 생성 요청\n- 이름: Hero Section\n- 크기: 1440x800"
  }
}
 테스트 방법
Postman 또는 curl 사용
curl -X POST http://localhost:3000/figma/create-frame \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Hero Section",
    "width": 1440,
    "height": 800
  }'
결과: Figma 도면 좌표 (100,100)에 주석이 자동으로 생성됩니다.

🧠 확장 예정 기능

기능	설명
🧩 Figma Plugin 연동	주석을 읽고 실제 UI 컴포넌트 생성
📝 Notion 연동	디자인 요청 이력 자동 기록
🤖 GPT Builder Actions	GPT가 직접 API를 호출하도록 연동
☁️ EC2 / Vercel 배포	실시간 AI 디자이너 서버 운영
👨‍💻 제작자
정현 박

GPT와 디자인 자동화의 미래를 함께 만들어가고 있습니다.
