import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="top">
          <div className="logo">Store</div>
        </div>
        <div className="center">
          <ul>
            <li>
              <span>list</span>
            </li>
            <li>
              <span>list</span>
            </li>
            <li>
              <span>list</span>
            </li>
          </ul>
        </div>
        <div className="bottom">Color options</div>
    </div>  
    );
};

export default Sidebar;