import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
                <MenuIcon />
                <img 
                    src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" 
                    alt=""
                    />
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input placeholder="search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className='header__right'>
                <AppsIcon />
                <NotificationsIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header