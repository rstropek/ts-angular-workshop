function delay(ms) {
    return new Promise((res) => { setTimeout(() => res(), ms); });
}

const asyncIterable = {
    async*[Symbol.asyncIterator]() {
        for (let i = 0; i < 42; i++) {
            await delay(100);
            yield 1;
        }
    }
};

(async () => {
    let result = 0;
    for await (let num of asyncIterable) {
        result += num;
        console.log(`Running sum: ${result}`);
    }
})();