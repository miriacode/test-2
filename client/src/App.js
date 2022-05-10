import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AllProducts from "./components/AllProducts";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <AllProducts />} />
          <Route path="/new" render={() => <NewProduct />} />
          <Route path="/product/:id" exact render={()=> <Product />} />
          <Route path="/product/edit/:id" render={() => <UpdateProduct />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
