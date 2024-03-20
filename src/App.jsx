import axios from "axios";
import React, { useState } from "react";

export default function App() {
  const [excuse, setExcuse] = useState("");

  const getExcuse = (props) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${props}/`)
      .then((res) => {
        setExcuse(res.data[0]);
      });
  };

  return (
    <div className="cat">
      <h1>Generate an Excuse</h1>
      <button onClick={() => getExcuse("party")}>Party</button>
      <button onClick={() => getExcuse("family")}>Family</button>
      <button onClick={() => getExcuse("office")}>Office</button>

      <p>Category: {excuse.category}</p>
      <p>{excuse.excuse}</p>
    </div>
  );
}
