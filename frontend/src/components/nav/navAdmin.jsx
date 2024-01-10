import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons8-home.svg";
import statIcon from "../../assets/icons8-stats-32.png";

function NavAdmin() {
  return (
    <nav className="nav-admin-container">
      <ol>
        <li className="li-admin-nav">
          <Link to="./user">
            <img width={30} src={homeIcon} alt="home" />
            User
          </Link>
        </li>
        <li className="li-admin-nav">
          <Link to="./game">
            <img width={30} src={statIcon} alt="stats" />
            Stats
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default NavAdmin;
