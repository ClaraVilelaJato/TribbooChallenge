import logo from "../images/logo.png";

const IconsMenu = (props) => {
  return (
    <nav className="nav fixed-top">
      <ul className="nav flex-column">
        <li className="first-el">
          <img className="logo" src={logo} alt="logo" />
        </li>

        <li>
          <button className="btn btn-line">
            <i className="fas fa-home"></i>
          </button>
        </li>
        <li>
          <button className="btn btn-line">
            <i className="far fa-check-square"></i>
          </button>
        </li>
        <li>
          <button className="btn btn-line">
            <i className="far fa-envelope"></i>
          </button>
        </li>
        <li>
          <button className="btn btn-line">
            <i className="far fa-user"></i>
          </button>
        </li>
        <li>
          <button className="btn btn-line">
            <i className="far fa-calendar-alt"></i>
          </button>
        </li>
        <li>
          <button className="btn btn-line">
            <i className="far fa-folder-open"></i>
          </button>
        </li>
        <li className="penultimate-el">
          <button className="btn btn-line">
            <i className="far fa-star"></i>
          </button>
        </li>
        <li className="last-el">
          <button className="btn btn-line">
            <i className="fas fa-cog"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default IconsMenu;
