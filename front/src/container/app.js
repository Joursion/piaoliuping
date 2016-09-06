import React, {Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import * as actions from '../actions'
import config from '../../config'

const Store = require('../store/index.js')
const Actions = require('../actions/index.js')
//import Store from '../store'
//import Action from '../actions'

import Header from '../components/header'

class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            show_bottle : "none"
        }
    }
    
    // componentWillMount() {
    //     fetch(config.apiUrl + '/tt', {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //     .then(data => {
    //         console.log("data",data)
    //         Store.dispatch(Actions.getBottle("123"))
    //     })
    // }

    TouchForGetBottle() {
        fetch(config.apiUrl + '/getbottle', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json)
        .then(data => {
            console.log("get a bottle data: ", data)
            Store.dispatch(Actions.getBottle(data))
        })
    }

    componetDidMount() {
        console.log(this.props);
    }

    render() {
        let { content , user , says, bottle , show_bottle } = this.props;
        let style = {
            main: {
                maxWidth: 480,
                margin: "0 auto"
            }
        }
        return (
            <div style = {style.main}>
                <Header/>
                { this.props.children }
            </div>
        )
    }
}

function  mapStateToProps (state) {
    return {
        state: state.actions,
        content: state.content,
        user: state.user,
        says: state.says,
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


App.PropTypes = {

}