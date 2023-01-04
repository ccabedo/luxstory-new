import * as React from "react";
import { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Input from "@mui/material/Input";

function Header({ user, bookings, handleLogOut, onSearch }) {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
         <div className="top__logo">L</div>
          LUXSTORY</div>
      </Link>

      <div className="header__center">
        <form className="searchbar" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="search"
            placeholder="search by borough..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="lined">
            <SearchIcon />
          </Button>
        </form>
      </div>

      <div className="header__right">
        <div>
          {user ? (
            <div>
              <h5>Welcome, {user.username}</h5>
            </div>
          ) : (
            <h4 className="header__logo">Log In</h4>
          )}
        </div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem>
            <nav>
              <Link to="/bookings">My Account</Link>
            </nav>
          </MenuItem>
          <MenuItem>
            <nav>
              <Link to="/login">Log In</Link>
            </nav>
          </MenuItem>
          <MenuItem>
            <nav>
              <Link to="/" onClick={handleLogOut}>
                Logout
              </Link>
            </nav>
          </MenuItem>
        </Menu>
        {user ? (
          <Avatar
            src={user.avatar}
            onClick={() => {
              history.push("/bookings");
            }}
          />
        ) : (
          <Avatar
            className="header__avatar"
            onClick={() => {
              history.push("/login");
            }}
          />
        )}
        <div></div>
      </div>
    </div>
  );
}

export default Header;
