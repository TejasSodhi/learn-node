// function foo() {
//   new Promise((resolve) =>
//     setTimeout(() => resolve("1")),
//   ).then(res => {
//     console.log(res);
//     new Promise((resolve) =>
//       setTimeout(() => resolve("2")),
//     ).then(res => console.log(res));
//   });
// }
async function foo() {

  const res1 = await new Promise((resolve) => setTimeout(() => resolve("1")));
  const res2 = await new Promise((resolve) => setTimeout(() => resolve("2")));

  console.log(res1);
  console.log(res2);

}
foo();
