import React, {Component} from 'react'
import { Link } from 'react-router'
import Good from '../components/good'
import config from '../../config'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Store = require('../store/index.js')
const Actions = require('../actions/index.js')

class Mall extends Component {

    componentDidMount() {
        fetch(config.apiUrl + '/goods', {
            method: "GET",
            mode: "cors"
        }).then(res => res.json())
        .then(data => {
            this.props.actions.getGoods(data.goods)
        })
    }

    render() {
        let { goods } = this.props
        goods = goods || []
        let style = {
            main:{
                maxWidth: 480,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column"
            },
            header:{
                top: 0,
                height: 40,
                lineHeight: "40px",
                paddingLeft: 10,
                background: "#34C9F5",
                color: "white"
            },
            acticle: {
                textAlign: "center"
            },
            content: {
                display: "flex"
            }
        }
       // console.log('mallpage render...', goods)
        return (
            <div style = {style.main}>
                <header style = {style.header} >
                    <Link to="/my"> {'<'}返回 </Link><span style = {style.acticle} >     欢迎来到积分商城</span>               
                </header>
                <div style = {style.content}>
                {
                    goods.map((v, index) => {
                        return <Good key = {index} info = {v} />
                    })
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mall)