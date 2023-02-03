import React from "react";
import "./Home.scss";
import Info from "./Info";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
      setMyData(res.data);
    });
  }, []);

  return (
    <div className="outer-container">
      <Info arr={mydata} />
    </div>
  );
};

export default Home;
