import { render } from 'react-dom'
import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Store = require('../store/index.js')
const Actions = require('../actions/index.js')

class My extends Component {
    
    constructor() {
        super()
        this.state = {
            
        }
    }
    
    render() {
        let style = {
            main: {
                dispaly: "flex",
                 width: "100%",
                // maxWidth: 480,
                // margin: "0 auto",
            },
            info: {
                width: "100%",
                display: "flex",
                alignItems: "center"
            },
            detail: {
                paddingLeft: "2rem",
                dispaly: "flex",
                flexDirection: "row"
            },
            avatar: {
                width: 100,
                height: 100,
                borderRadius: 50
            },
            item: {
                marginTop: "1rem",
                width: "100%",
                height: "3rem",
                lineHeight: "3rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                display: "flex",
                justifyContent: "space-between",
                boxSizing: "border-box",
                background: "white",
                border: "#F1F1F1 1px solid"
            }
        }
        return (
            <div style = {style.main} >
                <div className = "info" style = { style.info }>
                    <img src={ "http://5.1015600.com/2015/pic/000/373/cc5bad1eb75cd288debc548f9a85d413.jpg" } style = {style.avatar} />
                    <div style = {style.detail} >
                        <span> 小包子 </span> <span>积分 : 144</span>
                    </div>
                </div>      
                <div >
                    <Link to="/mall"><div style = {style.item} ><div>积分中心</div> <div> > </div></div> </Link> 
                </div>
                <div>
                     <Link to="/checkin"><div style = {style.item} ><div>签到</div><div> > </div></div> </Link> 
                </div>
                <div>
                    <Link to="/says"><div style = {style.item} ><div>说说</div> <div> > </div></div> </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(My)

My.PropTypes = {

}

