// arrow fns

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });


//map
const numbers = [1, 2, 3, 4, 5];

const ans = numbers.map((i) => {
    return i*2
    }
);
console.log(ans);

//filter
const array = [1, 2, 3, 4, 5];

const answer = array.filter((i) => {
    return i % 2 == 0
});

console.log(answer);

