import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import ContactMD from '../page/contact.md'

class Contact extends Component {
    state = {
        page: null
    }
    componentDidMount(){
        fetch(ContactMD).then(
            response => response.text()).then(
                text => this.setState({ page: text})
            )
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 ">
                    <ReactMarkdown source={this.state.page}/>
                </div>
            </div>
        );
    }
}

export default Contact;