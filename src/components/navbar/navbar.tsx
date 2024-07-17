import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h3 className="navbar-logo-text">Weekend Warrior Workshop</h3>
        <div className="navbar-options">
          <Button variant="text" className="navbar-option">
            <Link to="/workshop">
              <a>Workshop</a>
            </Link>
          </Button>
          <Button variant="text" className="navbar-option">
            <Link to="/projects">
              <a>Projects</a>
            </Link>
          </Button>
          <Button variant="text" className="navbar-option">
            <Link to="/">
              <a>Home</a>
            </Link>
          </Button>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Navbar;
