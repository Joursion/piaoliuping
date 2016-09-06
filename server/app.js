// require('babel-register')({
//         "presets": ["es2015"]
// });
var koa = require('koa');
var router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
var config = require('./config');
var bottleApi = require('./api/bottle');
var mallApi = require('./api/mall')
var saysApi = require('./api/says');
var cors = require('koa-cors');

var app = koa();

app.use(cors());
app.use(bodyParser());

// app.use(function *(data) {
//     data = data || {};
//     console.log("Data", data);
//     return function *(next) {
//         console.log("next");
//         yield* next;
//     }
// })

app.use(router.routes())
   .use(router.allowedMethods());


router.get('/api/v1/getbottle', bottleApi.getBottle)
router.get('/api/v1/tt', bottleApi.gettt)
router.post('/api/v1/throwbottle', bottleApi.throwBottle)
router.get('/api/v1/goods', mallApi.getGoods)
router.get('/api/v1/says', saysApi.getSays)
router.get('/test', bottleApi.getSSS)

app.listen(config.port, function () {
    console.log('Server listening on', config.port);
});

// moni post
// curl -d "owner=jours&&type=female&&content=i love you" http://localhost:3000
// curl -v "http://localhost:3000" 
// curl -d "type=1&&content=i love you" http://localhost:3000/api/v1/throwbottle