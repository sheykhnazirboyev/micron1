import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className = "App">
		<Switch>
			  <Route exact  path = "/" component = {Home} />
        	  <Route exact path = "/single-product/:id"  component = {SingleProduct} />
			  <Route exact path = "/shop" component = {Shop} />
			  <Route exact path = "/cart" component = {Cart} />
		</Switch>
    </div>
  );
}

export default App;
