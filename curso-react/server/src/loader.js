const s = require('./config/server')
require('./config/db')
require('./config/routes')(s)