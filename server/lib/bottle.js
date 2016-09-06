"use strict"
//import { Bottle } from '../models'
var Bottle = require('../models').Bottle

exports.getBottle = function (type) {
    return Bottle.findOne({type: type}).exec()
}

exports.delBottle = function (id) {
    return Bottle.findOneAndRemove({_id: id}).exec()
}

exports.addBottle = function(data) {
    return Bottle.create(data)
}


