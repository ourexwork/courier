const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use(proxy('/api', { target: 'http://rilxpress.com:80/' }));
    app.use(proxy('/api', { target: 'http://localhost:5000/' }));
};