// @ts-check

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */
const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번재 내용입니다',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다',
  },
];

const routes = [
  {
    url: '/posts',
    id: 'number',
    method: 'GET',
    callback: async (postId) => {
      const id = postId;
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }
      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }
      return {
        statusCode: 200,
        body: result,
      };
    },
  },
  {
    url: '/posts',
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
        body: 'posts uploaded',
      };
    },
  },
];

module.exports = {
  routes,
};
