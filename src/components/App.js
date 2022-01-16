import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//back
import data from "../data/initialState.json";
//styles
import "../styles/App.scss";
import Header from "./Header";
import IconsMenu from "./IconsMenu";
import TasKsColumns from "./TasksColums";

function App() {
  return (
    <div className="app">
      <Header />
      <IconsMenu />
      <TasKsColumns />
    </div>
  );
}

export default App;
