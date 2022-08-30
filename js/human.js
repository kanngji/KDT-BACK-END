// @ts-check

const names = ['철수', '영희'];
function showNames() {
  names.map((name) => console.log(name));
}

// module.exports = {
//   names,
//   showNames,
// };

export { names, showNames };
