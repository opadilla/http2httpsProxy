const config = require('./config');

var http = require('http'),
    httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
    proxy.web(req, res, {
        target: config.target,
        secure: false,
        ws: false,
        prependPath: false,
        ignorePath: false,
    });
});
console.log("listening on port " + config.port)
server.listen(config.port);

// Listen for the `error` event on `proxy`.
// as we will generate a big bunch of errors
proxy.on('error', function (err, req, res) {
  console.log(err)
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end("Oops");
});

proxy.on('proxyRes', function(proxyRes, req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

  proxyRes.headers['access-control-allow-origin'] = config.origin;
  proxyRes.headers['access-control-allow-credentials'] = true;
});
