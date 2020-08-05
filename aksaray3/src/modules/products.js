import React, { Component } from 'react'

class Products extends Component{
    render () {
            const {description}=this.props;
        return(
            <div>
                <div className="card mx-auto mt-1 mb-1">
                    <div className="card-body">
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.price}</li>
                            <li>{this.props.description.substring(0,20)}...</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <p>
                            {this.props.description.substring(0,30)}...
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products