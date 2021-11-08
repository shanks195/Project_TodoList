const dotenv = require('dotenv');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults();
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        req.body.updatedAt = Date.now();
    }
    // Continue to JSON Server router
    next()
})

dotenv.config();


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log("Server started on http://localhost:" + port)
})
server.use("/api", router);

module.exports = server;
