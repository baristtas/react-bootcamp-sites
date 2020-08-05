import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar.js'
import Footer from './components/footer.js'
import Products from './components/Product.js'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App container-fluid">
                    <Navbar/>

                    <div className="row mt-4">
              <div className="col-sm">
              <Products name="macbook" price="22" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum dolores velit? Ab est neque eum enim voluptatibus fuga quidem cupiditate. Reprehenderit laboriosam dignissimos doloribus necessitatibus animi vel nesciunt ab.
"/>

              </div>
              <div className="col-sm">
              <Products name="asus" price="59" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum dolores velit? Ab est neque eum enim voluptatibus fuga quidem cupiditate. Reprehenderit laboriosam dignissimos doloribus necessitatibus animi vel nesciunt ab.
"/>
              </div>
              <div className="col-sm">
              <Products name="özge" price="56" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum dolores velit? Ab est neque eum enim voluptatibus fuga quidem cupiditate. Reprehenderit laboriosam dignissimos doloribus necessitatibus animi vel nesciunt ab.
"/>

              </div>
            </div>
            <Footer/>
    </div>
  );
}

export default App;
