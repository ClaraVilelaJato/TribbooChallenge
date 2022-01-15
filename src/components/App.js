import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <section className="left">
          <div className="title">
            <h1>
              Planning/Nombre del Proyecto
              <button className="btn-title">
                <i className="fas fa-chevron-down"></i>
              </button>
              <button className="btn-title">
                <i className="fas fa-star"></i>
              </button>
            </h1>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
