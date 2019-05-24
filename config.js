module.exports = {
  port: 3500, // port number that the proxy listens on
  target: 'https://integrifydev.integrify.com', // https backend server to receive api requests
  origin: 'http://localhost:8233' // browser origin so that browser doesn't complain about CORS 
};