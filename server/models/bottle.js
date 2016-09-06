var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var bottleSchema = new Schema({
    // 1 famale 0 male
    type: {type: Number, required: true},
    content: {type: String},
    createAt: {type: Date, default: Date.now}
})

bottleSchema.index({createAt : 1}) 

module.exports = mongoose.model('Bottle', bottleSchema)
