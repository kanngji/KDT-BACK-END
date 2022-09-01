// @ts-check

// const promise = new Promise((resolve, reject) => {
//   const tetz = 'old';
//   if (tetz === 'old') {
//     setTimeout(() => {
//       resolve('tetz is old');
//     }, 3000);
//   } else {
//     reject('tetz is getting old');
//   }
// });

// promise
//   .then((data) => {
//     console.log(promise);
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fs = require('fs');

// fs.readFile('readme.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// 화살표 함수의 기본 틀
// this를 만들지 않기 때문에 메모리 효율이 좋다

// BE 를 할려면 화살표함수가 더 좋다
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const str = '파일 쓰기가 정상적으로 수행이 되면 이 문구가 파일에 들어갑니다ggg';
// fs.writeFile('readme.txt', str, 'utf-8', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('writeFile succeed');
//   }
// });

// 콜백지옥을 어떻게 promise로 풀어내는지 코드 ㅎ
const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('readme.txt', 'utf-8');
  console.log('1번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('2번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('3번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('4번', data);
}
main();
// fs.readFile('readme.txt', 'utf-8')
//   .then((data) => {
//     console.log('1번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('2번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('3번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('4번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번 일꾼', data.toString);
//   fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번 일꾼', data.toString);
//     fs.readFile('readme.txt', 'utf-8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번 일꾼', data.toString);
//       fs.readFile('readme.txt', 'utf-8', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번 일꾼', data.toString);
//       });
//     });
//   });
// });

// const fs = require('fs');

// let data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('1번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('2번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('3번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('4번', data);

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번 일꾼', data);
//   fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번 일꾼', data);

//     fs.readFile('readme.txt', 'utf-8', function (err, data) {
//       if (err) {
//         throw err;
//       }
//       console.log('3번 일꾼', data);
//       fs.readFile('readme.txt', 'utf-8', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번 일꾼', data);
//       });
//     });
//   });
// });
