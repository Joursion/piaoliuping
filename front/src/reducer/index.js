import Actions from '../actions'
import * as types from '../constants'

function reducer (state = {}, action) {
    switch(action.type) {
        case types.GET_BOTTLE: {
            //return Object.assign({}, state, {bottle: action.msg})
            return Object.assign({}, state, {
                bottle: {
                    content: action.content,
                    user: action.user,
                    time: action.createAt,
                    url: action.type
                } 
            })
        }

        case types.GET_GOOD: {

            return Object.assign({}, state, {
                goods: action.goods
            })
                    // goods: [
                    //     {
                    //         name: action.name,
                    //         description: action.description,
                    //         price: action.price,
                    //         imgUrl: action.imgUrl,
                    //         rest: action.rest
                    //     }
                    // ]
            // if(state.goods == null) {
                
            // }
            
            // return Object.assign({}, state, {
            //     goods: [...state.goods, {
            //             name: action.name,
            //             description: action.description,
            //             price: action.price,
            //             imgUrl: action.imgUrl,
            //             rest: action.rest
            //         }
            //     ]
            // })
        }

        case types.GET_SAYS: {
            return Object.assign({}, state, {
                says: [
                    {
                        url: action.url,
                        username: action.username,
                        content: action.content,
                        comment: action.comment,
                        createAt: action.createAt
                    }
                ]
            })
        }

        default: 
            return state
    }
}

module.exports = reducer
    