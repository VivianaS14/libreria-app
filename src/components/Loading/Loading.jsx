import React, { useState } from "react";
import "./Loading.scss";

const Loading = () => {
  const [loading, setLoading]=useState(false)

  setInterval(() => {
    setLoading(true)
  }, 2000);


  return (
    <>
      {
        !loading?<div  className="container">
        <div className="loading">
          <div className="book">
            <div className="book-cover"></div>
            <div className="book-pages">
              <div className="page page-1"></div>
              <div className="page page-2"></div>
              <div className="page page-3"></div>
              <div className="page page-4"></div>
              <div className="page page-5"></div>
              <div className="page page-6"></div>
              <div className="page page-7"></div>
              <div className="page page-8"></div>
            </div>
          </div>
        </div>
      </div>
      : <h1 style={{color:'gray'}}>Resultados no encontrados</h1>
      }
    </>
  );
};

export default Loading;
