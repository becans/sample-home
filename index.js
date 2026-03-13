const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>GCP 배포 테스트</title>
        <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
          .card { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #4285F4; }
          p { color: #5f6368; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 배포 성공!</h1>
          <p>라즈베리 파이 팬 컨트롤러 프로젝트의 클라우드 테스트 페이지입니다.</p>
          <p>현재 서버 시간: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
