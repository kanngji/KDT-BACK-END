// @ts-check

const http = require('http');
/**
 * 블로그용 서버 API 구성
 *
 * GET /posts           목록가져오기
 * GET /posts/:id       글 내용 가져오기
 * POST /posts          새로운 글 올리기
 * PUT /posts/:id       기존 글 수정하기
 * DELETE /posts/:id    기존 글 삭제하기
 */

const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다',
  },
  {
    id: 2,
    title: '두번째 블로그글',
    content: '두번째 내용입니다.',
  },
];
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  //   console.log('@@@@@@@@@@@@@@');
  const urlArr = req.url ? req.url.split('/') : [];
  console.log(urlArr);

  let id = -1;
  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
  }
  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
      })),
      totlaCount: posts.length,
    };
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
    console.log('블로그의 글 목록을 보여줄 API 입니다');
    console.log('@@@@@@@@@@@@');
  } else if (urlArr[1] === 'posts' && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (result) {
      res.statusCode = 200;
      res.end(JSON.stringify(result));
      console.log('블로그의 특정 글 내용을 보여주는 API 입니다');
      console.log(`Post ID 값은 ${id} 입니다`);
    } else {
      res.statusCode = 404;
      res.end('포스트를 찾을 수 없습니다.');
      console.log('포스트를 찾을 수 없습니다.');
    }
    console.log('@@@@@@@@@');
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
    });
    res.statusCode = 200;
    res.end('Upload Posts');
    console.log('블로그의 글을 올릴 때 호출할 API 입니다');
  } else if (urlArr[1] === 'posts' && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      console.log(data);
      const modifyPost = JSON.parse(data);
      modifyPost.id = id;
      posts[id - 1] = modifyPost;
    });
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`수정 된 포스트의 id 번호는 ${id}입니다`);
  } else if (urlArr[1] === 'posts' && req.method === 'DELETE') {
    // id 가 존재할때
    if (id) {
      posts.splice(id - 1, 1);
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 200;
      res.end(`id 번호가 ${id}인 포스트를 삭제 하였습니다.`);

      console.log('블로그의 글을 삭제 때 호출할 API 입니다');
    } else {
      // id가 존자하지 않을때 분기문
      res.end('해당 아이디가 없습니다');
      console.log('블로그의 id가 없습니다');
    }
  } else {
    res.statusCode = 400;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다.');
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}에서 작동 중입니다.`);
});
