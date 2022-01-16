import "../styles/layout/header.scss";

const Header = (props) => {
  return (
    <header className="container">
      <section className="left-section">
        <div className="title">
          <h1>
            Planning/ Nombre del Proyecto
            <button className="btn-white">
              <i className="fas fa-chevron-down"></i>
            </button>
            <button className="btn-title">
              <i className="fas fa-star"></i>
            </button>
          </h1>
          <section className="left--submenu collapsed">
            <button className="btn-yellow">Presupuestos</button>
            <button className="btn-menu">Planning</button>
            <button className="btn-menu">Certificaciones</button>
          </section>
        </div>
      </section>
      <section>
        <section className="row right-section">
          <form className="hstack form">
            <button className="right-section--btn btn">
              <i className="far fa-question-circle"></i>
            </button>
            <button className="right-section--btn btn">
              <i className="fas fa-share-alt"></i>
            </button>
            <input />
            <img className="right-section--user" src="" alt="usuario" />
          </form>
          <section className="right-section--submenu">
            <button className="btn-yellow right-section--submenu__button">
              Gantt
            </button>
            <button className="btn-yellow right-section--submenu__button">
              Kamban
            </button>
            <button className="btn-yellow right-section--submenu__button">
              Calendario
            </button>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
