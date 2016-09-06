import React, {Component} from 'react'
import { Link } from 'react-router'
class Good extends Component {
    render() {
        let { info } = this.props
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
            <Link to = {`/good/${info._id}`} >
            <div style = { style.main }>
                <img style = {style.img} src = {info.imgUrl} />
                <div style = {style.detail} >
                    <div>{info.name}</div>
                    <div style = {style.price} >{info.price}积分</div>
                </div>
            </div>
            </Link>
        );
    }
}

export default Good;