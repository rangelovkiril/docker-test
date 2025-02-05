const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'})
   
    if(req.method === 'POST' && req.url === '/api'){
        let body = ""

        req.on('data', chunk => {body += chunk.toString()})

        req.on('end', () => {
            console.log(`Data: ${body}`)
            fs.appendFile('data_stored.json', body, (err) => 
                err 
                ? console.error(err)
                : console.log('Data has been appended in file.')
            )
            res.end(JSON.stringify({ message: 'Data get', received: body}))
        })
        return;  // Чтобы избежать дальнейшей обработки запроса
    }

    if(req.url === '/'){
        res.end("Main page")
        return;  // Чтобы избежать дальнейшей обработки запроса
    }

    if(req.url === '/api'){
        res.end(JSON.stringify(users))
        return;  // Чтобы избежать дальнейшей обработки запроса
    }

    // Обработка "404" ошибки после всех других условий
    res.writeHead(404)
    res.end("Page not found")
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on ${PORT}`))
