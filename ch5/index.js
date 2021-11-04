// File system module in NodeJS
// Promise based API

import * as fs from 'fs/promises'

// try{
// await fs.mkdir('e:\\nodejs\\ch5\\iqran')
// console.log('Folder created...')
// }catch(error){
//     console.log(error)
// }

// try {
//     await fs.rmdir("e:\\nodejs\\ch5\\iqran")
// } catch (error) {
//     console.log(error)
// }

// try {
//    await fs.writeFile('readme.txt' , "Hello World")
// } catch (error) {
// console.log(error)    
// }

// try {
//   const myreadme= await fs.readFile("readme.txt", 'utf-8')
//   console.log(myreadme)
// } catch (error) {
//     console.log(error)
// }

// try {
//   const myreadme= await fs.readFile("readme.txt")
//   console.log(myreadme.toString())
// } catch (error) {
//     console.log(error)
// }