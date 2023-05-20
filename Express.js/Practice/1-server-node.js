const http=require('http');
const {readFileSync}=require('fs');

const homePage=readFileSync('./index.html')

const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==='/'){
        console.log(req.method)
        console.log(req.url)
        res.writeHead(200,{'content-type':'text/html'})
        // console.log(`User hit the server`)
        res.write(homePage)
        res.end();
    }
    else if(url==='/about'){
        console.log(req.method)
        console.log(req.url)
        res.writeHead(200,{'content-type':'text/html'})
        // console.log(`User hit the server`)
        res.write(`<h1>About Page</h1>`)
        res.end();
    }
    else{
        console.log(req.method)
        console.log(req.url)
        res.writeHead(404,{'content-type':'text/html'})
        // console.log(`User hit the server`)
        res.write(`<h1>Page not found</h1>`)
        res.end();
    }

})

server.listen(5000);