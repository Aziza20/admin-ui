import { useState } from "react";
import Home from "./assets/pages/home/Home";
import Login from "./assets/pages/login/Login";
import List from "./assets/pages/list/List";
import Single from "./assets/pages/single/Single";
import New from "./assets/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import MyList from "./assets/pages/Categories/MyList";
import Orders from "./assets/pages/order/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                  path="new" element={<New inputs={userInputs} title="Add New User"/>}>
              </Route>
             

            </Route>
            <Route path="products">
                <Route index element={<List />}></Route>
                <Route path=":produtcId"element={<Single/>}></Route>
                <Route 
                  path="new" element={<New inputs={productInputs} title="Add New Product" />}
                />
              </Route>

            <Route path="categories">
            <Route index element={<MyList />}></Route>  
            </Route>
            <Route path="orders">

              <Route index element={<Orders />}></Route>  
            
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
