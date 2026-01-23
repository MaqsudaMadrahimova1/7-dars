//2-misol
// const path = require('path');

// const files = ['document.pdf', 'photo.jpeg', 'archive.zip'];

// files.forEach(file => {
//     console.log(path.extname(file));
// });

//3-misol

// const path = require('path');
// const originalPath = 'D:/movies/horror/movie.mkv';
// let pathParts = path.parse(originalPath);

// pathParts.root = 'E:/';
// pathParts.dir = pathParts.dir.replace('D:', 'E:');
// const newPath = path.format(pathParts);

// console.log(newPath);

//4-misol

// const os = require('os');

// const userInfo = os.userInfo();

// console.log(`Foydalanuvchi: ${userInfo.username}`);
// console.log(`Home katalogi: ${userInfo.homedir}`);

//5-misol

// const os = require('os');
// const interfaces = os.networkInterfaces();

// for (const name in interfaces) {
//     interfaces[name].forEach(details => {
//     if (details.family === 'IPv4') {
//      console.log(`Interfeys: ${name}, IP: ${details.address}, MAC: ${details.mac}`);
//         }
//     });
// }