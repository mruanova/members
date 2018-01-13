var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    cors     = require('cors'),
    root     = __dirname,
    port     = process.env.PORT || 8080,
    app      = express();

app.use(bp.json())
app.use(cors());

var router = require('./server/config/routes.js');
router(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
