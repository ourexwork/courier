const proxy = require('http-proxy-middleware');

//  'http://rilxpress.com:80/'
const hostname = 'http://localhost:3000/';

module.exports = function(app) {
  app.use(proxy('/api', { target: hostname }));
};
