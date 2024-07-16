// eslint-disable-next-line no-unused-vars
import { Children, useState } from "react";
// import pages yang digunakan
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Mylist from "./pages/categories/Mylist";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { productInputs, userInputs } from "./formsource"; // import dari formsource.jsx
// eslint-disable-next-line no-unused-vars
import { userColumns, productColumns } from "./datatablesource";

function App() {
   const { darkMode } = useContext(DarkModeContext);

   const { currentUser } = useContext(AuthContext)

   // eslint-disable-next-line no-unused-vars, react/prop-types
   const RequireAuth = ({ children }) => {
     return currentUser ? children : <Navigate to="/login" />;
   };
   
   // eslint-disable-next-line no-unused-vars, react/prop-types
   const NotRequireAuth = ({ children }) => {
     return currentUser ? <Navigate to="/" /> : children;
   };
 
  return (
    <div className={darkMode ? "app dark" : "app"}> 
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>

            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User"/> }
              />
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" 
                element={<New inputs = {productInputs} title="Add New Product" /> }
              />
            </Route>

            <Route path="categories">
              <Route index element={<Mylist />}></Route>
              <Route path=":categoriesId" element={<Single />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

 