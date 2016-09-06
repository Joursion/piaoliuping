"use strict"
//import { Says } from '../models'
var Says = require('../models/says')

exports.getSaysByUserId = function (userid) {
    return Says.find({_id: userid})
}