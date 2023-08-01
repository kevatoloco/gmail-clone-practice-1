import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

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
                <input placeholder="Search mail" type="text" />
                <TuneOutlinedIcon className="header__inputCaret" />
            </div>
            <div className='header__right'>
                <HelpOutlineOutlinedIcon />
                <SettingsOutlinedIcon />
                <AppsOutlinedIcon />
                <Avatar className="header__avatar" onClick={signOut} src={user?.photoURL} />
            </div>
        </div>
    )
}

export default Header