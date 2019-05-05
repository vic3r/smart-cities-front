const routes = require('next-routes');

module.exports = routes()
.add('map')
.add('about')
.add('zapopan', '/zapopan', 'location')
.add('guadalajara', '/guadalajara', 'location')
.add('tlaquepaque', '/tlaquepaque', 'location');