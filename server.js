let express = require("express")
let path = require("path")


let app = express()
let PORT = process.env.PORT ||3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('./app/public'))

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on http://localhost:' + PORT);
});