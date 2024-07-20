import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom"; // import link untuk navigasi menu
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; //icon dashboard
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; //icon icon
import InventoryIcon from '@mui/icons-material/Inventory'; //icon products
import StoreIcon from '@mui/icons-material/Store'; //icon orders
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //icon profile
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; //icon logout
import CategoryIcon from '@mui/icons-material/Category'; // icone categories

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  const { dispatch: authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        authDispatch({ type: "LOGOUT" });
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
  };

  return ( 
    <div className="sidebar"> 

      <div className="top">
        <Link to="/">
          <span className="logo">Fidela Store</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <SpaceDashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>

          <p className="title">LIST</p>
          <Link to="/users">
            <li data-testid="users">
              <PeopleAltIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <InventoryIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon"/>
            <span>Orders</span>
          </li>

          <Link to="/categories">
            <li data-testid="categories">
              <CategoryIcon  className="icon"/>
              <span>Categories</span>
            </li>
          </Link>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type : "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type : "DARK"})}></div>
      </div>

    </div>
  );
};

export default Sidebar;
do {
  Sidebar;
} while (condition);
