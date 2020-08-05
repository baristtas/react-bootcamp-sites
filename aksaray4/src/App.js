import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './components/button.js'
import Product from './components/product';
import ProductJSON from './data/products.json'
import ButtonJSON from './data/buttonlist.json'
import User from './components/user'
class App extends Component {
  state = {
    users:[]
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState(this.state.users = json))
}
render() {
  return (
    <div className="container" >
      {
      this.state.users.map(user => {
        return (
          <User key={user.id}    userInfo={user}></User>
        )
      })
      }
    {ProductJSON.map(
        products => {return (<Product
          name={products.name} 
          description={products.description}></Product>)}
      )
      }
      <Button text="incele"></Button>
      {ButtonJSON.map(
        btn => {return <Button 
          href={btn.href} 
          text={btn.text}></Button>}
      )
      }
      <Button text="incele"></Button>
    </div>
    )
  }
}

export default App;
