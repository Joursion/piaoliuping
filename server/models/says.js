var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var SaysSchema = new mongoose.Schema({
    content: String,
    user: String,
    reply: [{
        to: {type: ObjectId, ref: 'User'},
        from: {type: ObjectId, ref: 'User'},
        content: String
    }],
    createAt: {type: Date, default: Date.now}
})

SaysSchema.index({createAt: 1})

module.exports = mongoose.model('Says',SaysSchema)