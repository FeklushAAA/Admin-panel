const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    console.log(require.method, request.url);
    if (request.url == '/APStyle.css') {
        const css = fs.readFileSync('APStyle.css', 'utf8');
        response.end(css);
    } else {
        const text = fs.readFileSync('adminPanel.html', 'utf8');
        response.end(text);
    }


});

server.listen(3000);
console.log('Server started');