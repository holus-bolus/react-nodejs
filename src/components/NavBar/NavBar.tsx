import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Workout</Link>
            </li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
