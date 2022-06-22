async function testAwait() {
  const test = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log('This is an example async/await and Promises which means this boilerplate handles it as well')); //eslint-disable-line
    }, 1000);
  });

  return test;
}

(() => {
  console.log('I will log first'); //eslint-disable-line
})();

let x = '';

(async () => {
  await testAwait();
  console.log('HELLo'); //eslint-disable-line
})();
