import React from 'react';
import srarch from '../assets/search.svg';
import logo from '../assets/logo.svg';
import messenger from '../assets/messenger.svg';
import notification from '../assets/notification.svg';
import arrowDown from '../assets/down-arrow.svg';
import './header.css';



const Header: React.FC = () => {
    return (
        <header className="app-header">
            <div className="logo">
                <img src={logo} alt="search icon" />
            </div>

            <div className="search">
                <span>
                    <img src={srarch} alt="search icon" />
                </span>
                <input placeholder='Search Facebook' />
            </div>

            <div className='header-right-icons'>
                <div className="messanger">
                    <img src={messenger} alt="search icon" />
                </div>
                <div className="notification">
                    <img src={notification} alt="search icon" />
                </div>
                <div className='avater'>
                    <img src={arrowDown} alt="search icon" />
                </div>
            </div>
        </header>
    )
}
export default Header;