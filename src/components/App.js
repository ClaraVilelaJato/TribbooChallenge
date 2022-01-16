import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//back
import initialData from "../data/initialState.json";
//styles
import "../styles/App.scss";
import Header from "./Header";
import IconsMenu from "./IconsMenu";
import TasKsColumns from "./TasksColums";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [data, setData] = useState(initialData);
  const [toDo, setToDo] = useState([]);
  const [inProcess, setInProcess] = useState([]);
  const [done, setDone] = useState([]);

  // useEffect
  useEffect(() => {
    getUpdatedData();
  }, [data]);

  // handles
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
  };

  const handleAddToData = (newTask) => {
    setData([...data, newTask]);
  };
  const handleUpdatedData = (id, newValue) => {
    const found = data.find((task) => task.idTask === id);
    found.status = newValue;
    setData([...data]);
  };

  const getUpdatedData = () => {
    const newProcess = data.filter((task) => task.status === "IN_PROGRESS");
    setInProcess(newProcess);
    const newToDo = data.filter((task) => task.status === "TODO");
    setToDo(newToDo);
    const newDone = data.filter((task) => task.status === "DONE");
    setDone(newDone);
  };

  return (
    <div className="app">
      <Header />
      <IconsMenu />
      <TasKsColumns
        searchWord={searchWord}
        toDo={toDo}
        inProcess={inProcess}
        data={data}
        handleAddToData={handleAddToData}
        handleUpdatedData={handleUpdatedData}
      />
    </div>
  );
}

export default App;
