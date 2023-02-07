import React from "react";
import { Route, Routes, Redirect, useNavigate } from "react-router-dom";
import "./App.css";
import Card from "../Card/Card";
import data from "../../data.json";

function App() {
  console.log(data);
  return (
    <div className="page">
      <header className="header">
        <p className="header__title">Traffic-lights</p>
      </header>
      <main className="content">
        <ul className="content__table">
          {data.map((data) => (
            <Card data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
