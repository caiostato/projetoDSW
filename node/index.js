let app = require('./config/server')
const routes = require('./app/routes/routes')

routes.home(app)
routes.user(app)
routes.pontos(app)
routes.error(app)
