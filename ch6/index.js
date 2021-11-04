// http module in NodeJs

import http from 'http'

const PORT = process.env.PORT || 8000
const HOST = 'localhost'
const server = http.createServer((req , res) => {
    res.setHeader("Content-Type" , "text/plan")
    res.end('This is from Server')
})

server.listen(PORT , HOST , ()=>{
    console.log('Server Runing At http://localhost:8000')
})