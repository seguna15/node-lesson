const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
       res.end('Welcome to our home page')
   }
   if(req.url === '/about'){
       res.end('Here is about page')
   }
   res.end(`
        <h1>Opps!</h1>
        <p>We cannot seem to find the page your are looking for</p>
        <a href="/"> go back home </a>
   `)
})

server.listen(5000)