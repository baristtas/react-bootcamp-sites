import React, { Component } from 'react'

class Products extends Component {
    render () {
const isShow = false
    const showDsc = (event) => {
        this.isShow = !this.isShow
        console.log(this.isShow)
}
        const {name,price,description} = this.props
        const productName = "Laptop";
        const productStyle = {
            // key value
                fontSize:"22px"
                // arrow funct
                
                }

        return(
<div className="card">
                <div className="card-header">
                <h3 style={productStyle}> {name} </h3>
                </div>
                <div className="card-body">
                    <ul>
                        <li>{name}</li>
                        <li>{price}</li>
                    </ul>
                </div>
                <div className="card-footer"
                onClick={showDsc}
                >
                    
                <p>
                    description:
                    <hr></hr>
                    {
                        this.isShow ? description : description.substring(0,90)
                    }
                    {description.substring(0,90).toUpperCase()}...
                </p>
                </div>
                </div>
        )
    }
}
export default Products