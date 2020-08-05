import React from 'react';
import logo from './logo.svg';
import Navbar from './modules/navbar.js'
import Footer from './modules/footer.js'
import Products from './modules/products.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/fontawesome/css/fontawesome.min.css';


function App() {
  return (
    <div className="App container-fluid" >
                <Navbar></Navbar>

      <div className="row mt-4">
        <div className="col-sm">
          <Products name="MacBook Pro" price="2999$" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deleniti id nemo sed. Qui aspernatur tempore ullam mollitia praesentium fuga quo alias recusandae possimus, in delectus sapiente repellendus quas sed?
"></Products>
        </div>
        <div className="col-sm">
          <Products name="Asus X550VX" price="640$" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deleniti id nemo sed. Qui aspernatur tempore ullam mollitia praesentium fuga quo alias recusandae possimus, in delectus sapiente repellendus quas sed?"></Products>
        </div>
        <div className="col-sm">
        <Products name="Monster TULPAR" price="950$" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deleniti id nemo sed. Qui aspernatur tempore ullam mollitia praesentium fuga quo alias recusandae possimus, in delectus sapiente repellendus quas sed?"></Products>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;