import * as types from '../constants'

module.exports = {
    getBottle: function (msg) {
        return {
            type : types.GET_BOTTLE,
            content : msg.content,
            url : msg.url,
            createAt: msg.createAt, 
            user : msg.user
        }
    },
    
    throwBottle: function (msg) {
        return {
            type: types.THROW_BOTTLE,
            msg
        }
    },

    getGoods: function (goods) {
        return {
            type: types.GET_GOOD,
            goods: goods
            // name: msg.name,
            // description: msg.description,
            // price: msg.price,
            // imgUrl: msg.imgUrl,
            // rest: msg.rest
        }
    },

    getSays: function (msg) {
        return {
            type: types.GET_SAYS,
            url: msg.url,
            username: msg.username,
            content: msg.content,
            comments: msg.comments,
            createAt: msg.createAt
        }
    }
}