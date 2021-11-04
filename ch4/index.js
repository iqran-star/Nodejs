// Path module in nodejs
// basename
const path = require('path');
const fs = require('fs');

// console.log(path.basename("E:\nodejs\\day3\\index.js"))
// console.log(path.basename(__filename))
// console.log(path.basename(__filename , '.js'))

// dirname
// console.log(path.dirname("E:\Nodejs\\day3\\index.js"))
// console.log(path.dirname(__filename))
// console.log(path.dirname(__dirname))


// extname

// console.log(path.extname(__filename))

// join

// console.log(path.join('/nodejs', "day2" ,"index.js"))
// console.log(path.join(__filename , '..' , 'express'))
// const file=path.join(__filename , '..' , 'express')
// const newfile = path.basename(file)
// console.log(newfile)
// fs.writeFileSync(`${newfile}index.html` , "Hello Wrold")

// normalize
// console.log(path.normalize("E:///khan\\\hello"))

// parse

// console.log(path.parse(__filename))
// console.log(path.parse(__filename).base)
// console.log(path.parse(__filename).dir)
// console.log(path.parse(__filename).ext)
// console.log(path.parse(__filename).name)
// console.log(path.parse(__filename).root)


// isAbsolute

// console.log(path.isAbsolute('.'))
// console.log(path.isAbsolute(__dirname))
// console.log(path.isAbsolute('E:\\khan'))