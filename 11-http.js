const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to the home page')
    }
    else if(req.url==='/about'){
        res.end('About Us')
    }
    else{

        res.end(`
        <h1>Error 404</h1>
        <p>Unable to find the page</p>
        <a href="/">Back Home</a>
        `);
    }

})

server.listen(5000);