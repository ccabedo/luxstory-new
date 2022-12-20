import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';





function Header() {
  const history = useHistory();

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
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar className="header__avatar" onClick={() => {history.push('/login')}}/>
        </div>
    </div>
  )
}

export default Header