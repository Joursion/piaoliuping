import { render } from 'react-dom'
import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Bottle from '../components/bottle'

const Store = require('../store/index.js')
const Actions = require('../actions/index.js')

class Index extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.TouchForGetBottle = this.TouchForGetBottle.bind(this)
        this.state = {
            show_bottle: "none"
        }
    }

    SetBottle_show() {
        this.setState({ show_bottle: "flex" })
    }

    TouchForGetBottle() {
        this.setState({show_bottle: "flex"})
        fetch("http://localhost:3000/api/v1" + '/getbottle', {
            method: "GET",
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            mode: "cors"
        }).then(res => res.json())
        .then(data => {
            console.log("get a bottle data: ", data.data.bottle)
            //Store.dispatch(Actions.getBottle(data.data.bottle))
            this.props.actions.getBottle(data.data.bottle)
        })
    }
    // componentWillMount() {
    //     fetch("http://localhost:3000/api/v1/tt",{
    //         method: "GET",
    //         mode: "cors"
    //     }).then(res => res.json)
    //     .then(data => console.log(data));
    // }
    render() {
        let {  TouchForThrowBottle, TouchForMy, show_bottle, bottle} = this.props
        //console.log("indexpage render", this.TouchForGetBottle)
        console.log("indexpage", this.props.bottle)
        let style = {
            menu: {
                dispaly: "flex",
                bottom: 100
            }
        }
        return (
            <div className = "menu" style = { style.menu }>
                <button className = "get" onClick = { this.TouchForGetBottle }>get</button>
                <div className = "throw">{"dasd"}</div>
                <div className = "my">my</div>
                <div className = "props">
                </div>
                <Bottle show_bottle = { show_bottle } bottle = {bottle} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bottle: state.bottle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)


Index.PropTypes = {
    bottle: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.string,
        user: PropTypes.string,
        url: PropTypes.string,
        time: PropTypes.string
    }))
}