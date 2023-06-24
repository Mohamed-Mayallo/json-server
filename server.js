const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running ...');
});
