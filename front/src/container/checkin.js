import React, {Component} from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import * as actions from '../actions'

const Store = require('../store/index.js')
const Actions = require('../actions/index.js')

class Checkin extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let { user } = this.props
        return (
            <div className="checkin-page">
                <span>已经连续签到{user.checkDays}天,继续加油啊!</span>
                <button className={`checkin-button-${user.checked}`}>
                    {checked == 'true' ? "签到" : "已签到"}
                </button>
                <div className='checkin-gg'>
                    {
                        /**轮播图组件 以后写在这里,广告 */
                    }
                </div>
            </div>
        );
    }
}

function  mapStateToProps (state) {
    return {
        user: state.user,
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
)(Checkin)