import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; //icon panah ke atas
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; //icon person di user
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"; //icon balance
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; //icon orders
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"; //icon earnings

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// eslint-disable-next-line react/prop-types
const Widget = ({ type }) => {
  let data;

  const [amount,setAmount] = useState(null);
  const [diff,setDiff] = useState(null);

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

      case "product":
        data = {
          title: "PRODUCTS",
          isMoney: false,
          link: "See all products",
          query: "products",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)",
              }}
            />
          ),
        };
        break;
  
      case "category":
        data = {
          title: "CATEGORIES",
          isMoney: false,
          link: "See all categories",
          query: "categories",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),
        };
        break;  

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        query: "users",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        query: "users",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
      
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        query: "users",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(44, 108, 255, 0.2)",
              color: "blue",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery); 

      setAmount(lastMonthData.docs.length);
      setDiff(100);

      if(prevMonthData.docs.length > 0){
        setDiff(
          ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
            100
        );
      } 
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>

      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div>
        {data.icon}
      </div>
      
    </div>
  );
};


export default Widget;