// @ts-check

const http = require('http');
const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다',
  },
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다',
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url);

  const urlArr = req.url ? req.url.split('/') : [];
  console.log(urlArr);
  let id = '-1';
  if (urlArr.length > 2) {
    id = urlArr[2];
  }

  console.log('id is', id);

  /**
   * GET    /posts         목록 가져오기
   * GET    /posts/:id     특정 글 내용 가져오기
   * POST   /posts         새로운 글 올리가
   * PUT    /posts/:id     특정 글 내용 수정하기
   * DELETE /posts/:id     특정 글 삭제하기
   */

  // req의 url 분기에따라 나눈다

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      post: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (req.url && urlArr[1] === 'posts' && req.method === 'GET') {
    res.statusCode = 200;
    console.log('블로그의 특정 글 내용을 보여줄 API 입니다');
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    console.log('블로그의 글을 올릴 때 호출할 API 입니다');
  } else if (req.url === '/posts/:id' && req.method === 'PUT') {
    res.statusCode = 200;
    console.log('블로그의 글을 수정 때 호출할 API 입니다');
  } else if (req.url === '/posts/:id' && req.method === 'DELETE') {
    res.statusCode = 200;
    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다.');
  }
});
//무조건 따라야하는 규약
//   res.statusCode = 200;
//브라우저로 보내줌
//   res.end('hello, back-end');
const PORT = 4000;

//서버 상에 뜨는것
server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다.`);
});

// const id = 'http://localhost:4000/posts/123';
// console.log(id.indexOf('posts/'));
// const setting = id.indexOf('posts/') + 5;
// const findId = id.slice(setting);
// console.log(findId);
