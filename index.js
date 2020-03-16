var Jimp = require('jimp');

var images = './images/owo.jpg'; // Path of the img

Jimp.read(images, (err, imageOp)=>{
    if (err) throw err;
    imageOp
    .resize(1080) /*Same as height*/, Jimp.AUTO // Autu height replace for ur preference)
    .quality(60) // Quality of the optimizing 1-100
    .write('./opimg/owo.jpg') //Replace this with the path + name of the img
});