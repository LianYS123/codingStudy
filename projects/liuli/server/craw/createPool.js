const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
const createPool = (fn, limit = 10, gap = 0) => {
  const cache = [];
  let flag = false;
  let size = 0;
  const setSize = (s) => {
    if (s <= size) {
      size = s;
      onSizeDecrease();
    } else {
      size = s;
    }
  };
  const onSizeDecrease = () => {
    if (!cache.length) {
      if (!size) {
        flag = false;
      }
      return;
    }
    if (size < limit) {
      for (let i = 0; i < limit - size; i++) {
        start();
      }
    }
  };
  const run = async () => {
    const { args, cb } = cache.shift();
    await fn(...args)
      .then(cb.resolve)
      .catch(cb.reject);
  };
  const start = async () => {
    if (!cache.length) return;
    setSize(size + 1);
    await run();
    setSize(size - 1);
  };
  const delayStart = async () => {
    if (!cache.length) {
      flag = false;
      return;
    }
    await run();
    await delay(gap);
    delayStart();
  };
  return (...args) =>
    new Promise((resolve, reject) => {
      cache.push({ args, cb: { resolve, reject } });
      if (!flag) {
        flag = true;
        if (gap) {
          delayStart();
          return;
        }
        setSize(size);
      }
    });
};
module.exports = createPool;
// const req = createPool((x) => delay(2000 * Math.random()).then(() => console.log(x)), 0, 1000);
// const reqAll = async () => {
//   const arr = [];
//   for (let i = 0; i < 100; i++) {
//     arr.push(req(i));
//   }
//   await Promise.all(arr);
// };
// const countTime = async (fn) => {
//   const t1 = Date.now();
//   await fn();
//   const t2 = Date.now();
//   console.log('total time is ' + (t2 - t1));
//   return t2 - t1;
// }
// countTime(reqAll);