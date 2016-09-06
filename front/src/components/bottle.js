import { render } from 'react-dom'
import React, { PropTypes, Component } from 'react'
import Avatar from './avatar'

export default class Bottle extends Component {

    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        let { show_bottle, bottle } = this.props
        bottle = bottle || {}
        console.log("bottle", bottle);
        let style = {
            display: show_bottle,
            alignItems:"flex-start",
            flexDirection: "column"
        }
        // bottle.url = bottle.url || ""
        // bottle.content = bottle.content || ""
        // bottle.user = bottle.user || ""
        let btl = {
           // content: bottle.content ? bottle.content : ""
        }
        return (
            <div className= "bottle" style = {style} >
                <Avatar avatarUrl = {"http://i0.hdslb.com/group1/M00/B7/66/oYYBAFdWoTOAB4BwAAAtEirkdOY631.gif"} />
                <strong> { 
                    // bottle.map((v,index) =>{
                    //     return <div> {v.content }</div>
                    // })
                    bottle.content
                 }</strong>
                <div>  {  "321"}</div>
            </div>
        ) 
    }
}

Bottle.PropTypes = {
    bottle: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.string,
        user: PropTypes.string,
        url: PropTypes.string,
        time: PropTypes.string
    }))
}
