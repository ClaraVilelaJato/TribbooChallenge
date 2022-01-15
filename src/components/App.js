import "../styles/App.scss";
import Header from "./Header";
import IconsMenu from "./IconsMenu";
import TasKsColumns from "./TasksColums";

function App() {
  return (
    <div className="App">
      <Header />
      <IconsMenu />
      <TasKsColumns />
    </div>
  );
}

export default App;
