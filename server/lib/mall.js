"use strict"
var Mall = require('../models').Mall

exports.getMall = function () {
    return Mall.find().limit(10).exec()
}
