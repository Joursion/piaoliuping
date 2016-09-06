import React, {Component} from 'react'

class Goodinfo extends Component {
    render() {
        let { imgUrl, price, description, name, rest } = this.props
        let style = {
            main: {
                display: "flex",
                width: "50%",
                flexDirection: "column",
                border: "#F3F3F3 1px solid",
                marginTop: 5
            },
            detail:{
                display: "flex",
                flexDirection: "column",
                textAlign: "center"
            },
            price: {
                color: "#757677"
            },
            img: {
                height: 100,
                width: 100,
                margin: "auto"
            },
            description: {
                fontSize: "0.5rem",
                color: "rgb(173, 173, 173)"
            },
            name: {

            },
            button:{
                margin: "auto",
                background: "#ECE8E8",
                border: "none",
                paddding: 4,
                width: 100,
                borderRadius: 40,
                marginTop: 5,
                marginBottom: 5
            }
        }

        return (
            <div style = { style.main }>
                <img style = {style.img} src = {imgUrl} />
                <div style = {style.detail} >
                    <div>{name}</div>
                    <div style = {style.description} >{description}</div>
                    <div style = {style.price} > 需要积分: {price}</div>
                    <button style = {style.button}> 兑换 {rest}</button>
                </div>
            </div>
        );
    }
}

export default Goodinfo;