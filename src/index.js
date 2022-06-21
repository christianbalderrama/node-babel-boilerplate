async function testAwait() {
  const test = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("This is an example async/await and Promises which means this boilerplate handles it as well"));
    }, 1000);
  })

  return test;
}

console.log("Hello, World!");

(() => {
  console.log("I will log first");
})();

(async() => {
  await testAwait();
  console.log("HELLo");
})();
