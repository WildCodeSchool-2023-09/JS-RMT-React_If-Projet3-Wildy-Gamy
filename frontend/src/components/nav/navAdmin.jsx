import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons8-home.svg";
import statIcon from "../../assets/icons8-stats-32.png";

function NavAdmin() {
  return (
    <nav className="nav-admin-container">
      <ol>
        <Link to="./user">
          <li className="li-admin-nav">
            <span>
              <img width={30} src={homeIcon} alt="home" />
            </span>
            User
          </li>
        </Link>
        <Link to="./game">
          <li className="li-admin-nav">
            <span>
              <img width={30} src={statIcon} alt="stats" />
            </span>
            Stats
          </li>
        </Link>
      </ol>
    </nav>
  );
}

export default NavAdmin;
