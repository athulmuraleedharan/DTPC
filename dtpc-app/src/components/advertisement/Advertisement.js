import React from "react";
import "./ads.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Advertisement() {
  
  const [data, getData] = useState({});
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((res) => {
        console.log(res.data);
        getData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
// console.log(data);
  return (
    <div>
        {/* {data.map(i=>( */}
      <div className="ads-section">
        <img src={data.thumbnail} alt="ads" height="500px" width="300px"></img>
        {/* <h4>{data.title}</h4> */}
      </div>
      {/* ))}   */}
    </div>
  );
}
export default Advertisement;
