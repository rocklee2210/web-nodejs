const http = require('http')
const URL = require('url')
const querystring = require('querystring')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })


    let url = URL.parse(req.url)
    if (url.pathname === '/') {
        let html = fs.readFileSync(path.join(__dirname, 'views/login.html'))
        return res.end(html)
    }
    if (url.pathname === '/success') {
        let html = fs.readFileSync(path.join(__dirname, 'views/mainpage.html'))
        return res.end(html)
    }

    let html = fs.readFileSync(path.join(__dirname, 'views/login.html'))
    res.end(html)
})

server.listen(8080, () => {
    console.log('http://localhost:8080')
})