const { readFile, writeFile } = require('fs').promises;

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, res) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(res);
//         })
//     })
// }

// const getFile = (path) => getText(path).then((res) => console.log(res)).catch(e => console.log(e));

// Using File System Promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/res-async.txt', `This is awesome : ${first} ${second}`);
    } catch (e) {
        console.log(e)
    }
}

// Using File System

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second)
//     } catch (e) {
//         console.log(e)
//     }
// }

module.exports = { start };