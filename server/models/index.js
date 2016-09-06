var mongoose = require('mongoose')
var config = require('../config.js')
var Bottle = require('./bottle.js')
var User = require('./user')
var Says = require('./says')
var Mall = require('./mall')

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
        server: {poolSize: 20}
}, function (err) {
        console.log("mongodb is on", config.db);
        if (err) {
            console.log(err)
    }
})

exports.Bottle = Bottle
exports.Says = Says
exports.User = User
exports.Mall = Mall