import React, { Component } from 'react';
import './assets/fontawesome/css/fontawesome.min.css';
import About from './components/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Post from './components/post'
import Contact from './components/contact'
import Bulunamadi from './components/Bulunanadi';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
      return (
        <BrowserRouter>
                
            <div>
              <Navbar/>
              <div className="container">
                <Switch>
                <Route exact path="/">
                    <Post/>
                  </Route>
                <Route exact path='/about'>
                  <About></About>
                </Route>
                <Route exact path='/contact'>
                  <Contact></Contact>
                </Route>
                <Route path='*'>
                  <Bulunamadi></Bulunamadi>
                </Route>
                </Switch>
              </div>
              <Footer/>
          </div>
        </BrowserRouter>
        
      );
  }
}
export default App;