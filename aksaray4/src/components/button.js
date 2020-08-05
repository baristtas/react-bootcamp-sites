import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component{
    render() {
        return (
            <a className="btn {this.props.className}"
            href="{ this.props.href }">
                { this.props.text }
            </a>
        )
    }
}
Button.defaultProps ={
    className:"btn btn-primary",
    href:"#",
    text:"text yazdmadiniz",
}
export default Button