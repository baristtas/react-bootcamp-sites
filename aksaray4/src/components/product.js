import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        {this.props.name}
                    </h4>
                    </div>
                    <div className="card-body">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            
        )
    }
}

export default Product