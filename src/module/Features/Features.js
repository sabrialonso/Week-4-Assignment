import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonExample from "./Spinner";

function Get() {
  const [data, setData] = useState("");
const getAllData = () => {
    axios
      .get("https://world-cup-json-2018.herokuapp.com/matches")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
useEffect(() => {
    getAllData();
  }, []);


const displayData = () => {
    return data ? (
      data.map((data) => {
        return (
          <div className="data" key={data.id} align="center">
            {/* <p>{data.venue}</p> */}
           <ul>
            <li>{data.officials[2]}</li>
            </ul>
          </div>
        );
      })
    ) : (
      <ButtonExample />
    );
  }
return (
    <>
     <h1 align="center">List of Pro Players:</h1><br></br>
      {displayData()}
      
    </>
  );
}
export default Get;