var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var userSchema = new Schema({
    id: {type: String, required: true},
    password: {type: String, required: true},
    role: Number, //1. normal user 2. admin 3. super admin
    name: {type: String, required: true},
    describe: {type: String, required: true},
    createAt: {type: Date, default: Date.now},
    isLogin: {type: Number, default: 0}, // 0 notLogin, 1 isLogin ,
    checkDays: {type: Number, default: 0},
    checked: {type: Number, default: 0}
})

userSchema.index({createAt: 1})

module.exports = mongoose.model('User', userSchema)
