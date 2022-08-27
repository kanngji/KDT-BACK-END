// @ts-check

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello');

  const urlArr = req.url ? req.url.split('/') : [];

  let id = 'not';
  if (urlArr.length > 2) {
    id = urlArr[2];
  }

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Posts List');
    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'GET') {
    console.log('블로그의 특정 글 내용을 보여줄 API 입니다');
    console.log(`post ID 값은 ${id} 입니다`);

    res.statusCode = 200;
    res.end(`Show Post, id is ${id}`);
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    res.end('Upload Posts');
    console.log('블로그의 글을 올릴 때 호출할 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'PUT') {
    console.log('블로그의 글을 수정 때 호출할 API 입니다');
    console.log(`Post ID 값은 ${id} 입니다`);
    res.statusCode = 200;
    res.end(`Modify Post, id is ${id}`);
  } else if (urlArr[1] === 'posts' && req.method === 'DELETE') {
    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
    console.log(`Post ID 값은 ${id} 입니다`);
    res.statusCode = 200;
    res.end(`Delete Post, id is ${id}`);
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다');
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}에서 작동 중입니다`);
});
