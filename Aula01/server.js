const http = require('http')

const requisicao = function(_, y){
    y.writeHead(200, { 'Content-Type' : 'text/html'})
    y.write('<h1>Texto a ser exibido no Browser</h1>')
    y.end()
}

const server = http.createServer(requisicao)

const resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado)