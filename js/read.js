// async , await로 구현

const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('memo.txt');
  console.log('1번', data.toString());
  data = await fs.readFile('memo.txt');
  console.log('2번', data.toString());
  data = await fs.readFile('memo.txt');
  console.log('3번', data.toString());
  data = await fs.readFile('memo.txt');
  console.log('4번', data.toString());
}

main();

// 콜백 지옥을  promise로 변경

// const fs = require('fs').promises;

// fs.readFile('memo.txt')
//   .then((data) => {
//     console.log('1번', data.toString());
//     return fs.readFile('memo.txt');
//   })
//   .then((data) => {
//     console.log('2번', data.toString());
//     return fs.readFile('memo.txt');
//   })
//   .then((data) => {
//     console.log('3번', data.toString());
//     return fs.readFile('memo.txt');
//   })
//   .then((data) => {
//     console.log('4번', data.toString());
//   })
//   .catch((err) => {
//     throw err;
//   });

// const promise = new Promise(function (resolve, reject) {
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
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

// const fs = require('fs');

// let data = fs.readFileSync('memo.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('memo.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('memo.txt');
// console.log('3번', data.toString());
// data = fs.readFileSync('memo.txt');
// console.log('4번', data.toString());

// const fs = require('fs');

// // callback 지옥으로 구현하기

// fs.readFile('memo.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
//   fs.readFile('memo.txt', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번', data.toString());
//     fs.readFile('memo.txt', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번', data.toString());
//       fs.readFile('memo.txt', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번', data.toString());
//       });
//     });
//   });
// });

// fs.readFile('memo.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
// });
// fs.readFile('memo.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('2번', data.toString());
// });
// fs.readFile('memo.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('3번', data.toString());
// });
// fs.readFile('memo.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('4번', data.toString());
// });
// 파일 읽기
// fs.readFile('memo.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 파일 쓰기
// const str = '파일 쓰기가 정상적으로 되는지 테스트 합니다';

// fs.writeFile('memo.txt', str, 'utf-8', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('writefile succedd');
//   }
// });
