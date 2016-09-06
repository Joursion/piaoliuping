var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var mallSchema = new Schema({
    rest: {type: Number},
    descriptions: {type: String},
    imgUrl: {type: String},
    name: {type: String},
    price: {type: Number}
})

module.exports = mongoose.model('Mall', mallSchema)