// @ts-check

const arr = [10, 20, 30, 40, 50];

// for (let i = 0; i < arr.length; i++) {
//   console.log('일반 for문 사용', arr[i]);
// }

// for (let item of arr) {
//   console.log('for of 문 사용', item);
// }

// arr.map(function (element, index) {
//   console.log(index + '번 값은' + element);
// });

// arr.map((element, index) => {
//   console.log(index + '번 값은' + element);
// });

const result = arr.find(function (element) {
  return element === 20;
});

console.log(result);
