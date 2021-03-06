import { getByTitle } from "@testing-library/react";
import { useState } from "react";
//Styles

import InputOption from "./InputOption";

const OneTask = (props) => {
  const [view, setView] = useState("");

  const handleClickTask = (ev) => {
    if (view !== "hidden") {
      const el = ev.target;
      const p = el.parentElement.id;
      setView("hidden");
      renderOptionInput(p);
    }
  };

  const renderOptionInput = (p) => {
    if (view === "hidden") {
      return (
        <InputOption
          p={p}
          defaultValue={"Escoge el estado..."}
          firtsValue={"TODO"}
          secondValue={"IN_PROGRESS"}
          thirdValue={"DONE"}
          firtsText={"A hacer"}
          secondText={"En proceso"}
          thirdText={"Obj. Cumplido"}
          updateStatus={updateStatus}
        />
      );
    }
    if (view === "") {
      return <i className={`${view} fas fa-ellipsis-h`}></i>;
    }
  };

  const updateStatus = (ev) => {
    const s = ev.target;
    const p = s.closest("li").id;
    props.handleUpdatedData(p, s.value);
    setView("");
  };

  const searchWordSelected = () => {
    if (
      props.searchWord !== "" &&
      props.task.taskName.toLowerCase().includes(props.searchWord.toLowerCase())
    ) {
      return "selected";
    }
  };

  return (
    <li
      key={props.task.idTask}
      id={props.task.idTask}
      className="list-group-item bg-light"
    >
      <h3
        onClick={handleClickTask}
        className={`list--title ${searchWordSelected()}`}
      >
        {props.task.taskName} {renderOptionInput()}
      </h3>
      <p>{props.task.description}</p>
      <button className={`fase fase--${props.task.phase}`}>
        FASE {props.task.phase}
      </button>
      <p className="date">
        {props.task.startAt} - {props.task.endAt}
      </p>
    </li>
  );
};

export default OneTask;
