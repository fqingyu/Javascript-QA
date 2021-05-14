const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
    myPromise.then(res => res).then(res => console.log(res + '1'));
    setTimeout(() => console.log('Timeout!'),0);
    console.log('Last line!');
}

async function funcTwo() {
    const res = await myPromise;
    console.log(await res + '2');
    setTimeout(() => console.log('Timeout!'),0);
    console.log('Last line!');
}

funcOne();
funcTwo();

// setTimeout(_ => console.log(4));
//
// new Promise(resolve => {
//     resolve();
//     console.log(1);
// }).then(_ => {
//     console.log(3);
// });
//
// console.log(2);
