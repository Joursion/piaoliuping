import React, {Component} from 'react';

class Say extends Component {
    constructor() {
        super()

    }
    

    render() {
        let { say } = this.props;
        let style = {
            main:{
                display: "flex"
            },
            img:{
                width: 30,
                height: 30,
                borderRadius: 15
            },
            content: {
                padding: 2
            }
        }
        say = say || {}
        return (
            <div style = {style.main }>
                <div>
                    <img src = {say.url} style = { style.img }/>
                    <div style = {style.user}> {say.user}</div>
                </div>
                <content style = {style.content}> {say.content}</content>
            </div>
        );
    }
}

export default Say;