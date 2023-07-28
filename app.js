
// Import modules from another files Example :-
// const { john, ana } = require('./1-intro');


// const sayHi = (name) => {
//     console.log(`Hi there, ${name}`);
// }

// sayHi('Chandru');
// sayHi(john);
// sayHi(ana);

// *********************

// Global Mathods Example :-
// const path = require('path');

// const filePath = path.join('/content/', 'sub-folder', 'test.txt');
// const base = path.basename(filePath);
// const absolute = path.resolve(__dirname,'content','sub-folder','test.txt');

// console.log(filePath);
// console.log(base);
// console.log(absolute);

// *********************
// File System Example :-

// const fs = require('fs');
// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');
// writeFileSync('./content/result.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' })

// CallBack Hell Example Using read and write file

const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', ((err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = res;
        writeFile('./content/third.txt', `Here is the result : ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(res)
        })
    })
}))






