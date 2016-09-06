import React, {Component} from 'react';

class Avatar extends Component {
    constructor() {
        super()
    }
    render() {
        let style = {
            width: 100,
            height: 100
        }
        let { avatarUrl } = this.props
        return (
            <div>
                <img src = {avatarUrl} style = {style} />
            </div>
        );
    }
}

export default Avatar;