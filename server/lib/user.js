"use strict"
//import { User } from '../models'
var User = require('../models/user')

exports.getUserById = function (id) {
    return User.findOne({_id: id}).exc()
}

exports.saveUser = function (data) {
    return User.create(data)
}

exports.subTimesOfBottle = function (id) {
    return User.findOneAndUpdate({_id: id}, {$set:{times: 1}}).exc()
}