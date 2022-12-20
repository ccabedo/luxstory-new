import * as React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


function Header({ user, bookings, handleLogOut }) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  

  return (
    <div className='header'>
      <Link to='/'>
          <img
              className="header__icon"
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              alt=""
          />
      </Link>

        <div className="header__center">
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
        <div>{user ? (<div><h5>Welcome back, {user.username}</h5></div>) : (<h4 className="header__logo">LuxStory</h4>)}</div>
            {/* <LanguageIcon /> */}
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <ExpandMoreIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem><nav><Link to="/bookings">My Account</Link></nav></MenuItem>
        <MenuItem><nav><Link to="/login">Log In</Link></nav></MenuItem>
        <MenuItem><nav><Link to="/" onClick={handleLogOut}>Logout</Link></nav></MenuItem>
      </Menu>
      <Avatar className="header__avatar" onClick={() => {history.push('/login')}}/>
      <div>
    </div>  
    </div>
  </div>
  )
}

export default Header