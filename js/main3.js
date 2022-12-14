// @ts-check
const http = require('http');
/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
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
// 서버 정의 코드
const server = http.createServer((req, res) => {
  console.log('REQ URL', req.url);
  const urlArr = req.url ? req.url.split('/') : [];
  console.log(urlArr);
  let id = -1;
  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
  }
  console.log('asdasd', id, typeof id);

  /**
   * 블로그용 서버 API 구성
   *
   * GET /posts 목록 가져오기
   * GET /posts/:id 글 내용 가져오기
   * POST /posts 새로운 글 올리기
   * PUT /posts/:id 기존 글 수정하기
   * DELETE /posts/:id 기존 글 삭제하기
   */

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));

    console.log('블로그의 글 목록을 보여줄 API 입니다');
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (result) {
      res.statusCode = 200;
      res.end(JSON.stringify(result));
      console.log('블로그의 특정 글 내용을 보여줄 API  입니다');
      console.log(`Post ID 값은 ${id} 입니다`);
    } else {
      res.statusCode = 404;
      res.end('포스트를 찾을 수 없습니다.');
      console.log('포스트를 찾을 수 없습니다.');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      posts.push({
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
      });
    });
    res.statusCode = 200;
    res.end('새로운 글이 등록 되었습니다.');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    console.log('블로그의 새로운 글을 등록하는 api 입니다');
  } else if (id !== -1 && req.method === 'PUT') {
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

    console.log('블로그의 특정 글을 수정하는 API 입니다');
  } else if (id !== -1 && req.method === 'DELETE') {
    posts.splice(id - 1, 1);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`id 번호가 ${id}인 포스트를 삭제 하였습니다.`);

    console.log('블로그의 글을 삭제 때 호출할 API 입니다');
    // 분기에 하나도 안걸릴때
  } else {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 404;
    res.end('Not Found');
    console.log('해당 API를 찾을 수 없습니다.');
  }
});
const PORT = 4000;

// 서버 실행시키는 code
server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}에서 작동 중입니다.`);
});
