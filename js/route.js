// @ts-check

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
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다.',
  },
];

const routes = [
  // 블로그 목록을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'undefined',
    callback: async () => ({
      statusCode: 200,
      body: {
        posts: posts.map((post) => ({
          id: post.id,
          title: post.title,
        })),
        totalCount: posts.length,
      },
    }),
  },
  // 특정 ID의 블로그 글을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'number',
    callback: async (postId) => {
      const id = postId;
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not Found',
        };
      }

      const result = posts.find((post) => post.id === id);
      if (!result) {
        return {
          statusCode: 404,
          body: 'ID Not Found',
        };
      }

      return {
        statusCode: 200,
        body: result,
      };
    },
  },

  //새로운 글을 쓰는 API
  {
    url: '/post',
    method: 'POST',
    id: 'undefined',
    callback: async (id, newPost) => {
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
      return {
        statusCode: 200,
        body: 'post is uploaded',
      };
    },
  },
  //수정 하기 API
  {
    url: '/post',
    method: 'PUT',
    id: 'number',
    callback: async (id, newPost) => {
      if (!id) {
        return {
          statusCode: 404,
          body: 'NOT found',
        };
      }
      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Not Found',
        };
      }
      const modifyPost = newPost;
      modifyPost.id = id;
      posts[id - 1] = modifyPost;
      return {
        statusCode: 200,
        body: modifyPost,
      };
    },
  },
  // 삭제 하기 API
  {
    url: '/post',
    method: 'DELETE',
    id: 'number',
    callback: async (id) => {
      if (!id) {
        return {
          statusCode: 404,
          body: 'NOT found',
        };
      }
      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Not Found',
        };
      }

      posts.splice(id - 1, 1);
      return {
        statusCode: 200,
        body: 'post deleted',
      };
    },
  },
];

module.exports = {
  routes,
};
