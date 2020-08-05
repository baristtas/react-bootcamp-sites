import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    render() {
        return(
            <div className="card mb-1 mt-1">
                    <div className="card-body">
                        <ul>
                            <li>
                                {this.props.userInfo.name}
                            </li>
                            <li>
                                {this.props.userInfo.email}
                            </li>
                            <li>
                                {this.props.userInfo.username}
                            </li>
                        </ul>
                    </div>
                </div>
            
        )
    }
}

export default User