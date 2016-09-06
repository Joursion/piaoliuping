import React, { Component, ProtoType } from 'react'
import Say from '../components/say'
import config from '../../config'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Store = require('../store/index.js')
const Actions = require('../actions/index.js')

class Says extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        fetch(config.apiUrl + '/says', {
            method: "GET",
            mode:"cors"
        }).then(res => res.json())
        .then(data => {
            data.data.map(d =>{
                this.props.actions.getSays(d)
            })
        })
    }

    render() {
        let { says } = this.props
        says = says || []
        return (
            <div>
                {
                    says.map(function(say, index) {
                        return <Say say = {say} key = {index} />
                    })
                }
            </div>
        );
    }
}  

const mapStateToProps = (state) => {
    return {
        says: state.says
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
)(Says)


