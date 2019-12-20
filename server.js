// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// const port = process.env.PORT || 3000
 
// server.use(middlewares)
// server.use(router)
// server.listen(port, () => {
//   console.log('JSON Server is running')
// })

//       // "start": "json-server -p 3001 -w db.json"

const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
