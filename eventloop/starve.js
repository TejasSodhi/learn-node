
const cb = () => {
    // do Something
    process.nextTick(cb);
};

setTimeout(() => console.log('setTimeout executed'), 5);

setImmediate(() => cb);

console.log('Start');
