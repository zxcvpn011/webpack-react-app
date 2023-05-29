
const config = require("dotenv")
const app = require("./app")
const Server = require("http").Server(app)
const debug = require("debug")

Server.listen(80)
Server.on('listening', function() {
  const addr = Server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
 })
 