import React from 'react';
import smallavatar  from "../../assets/img/smallavatar.svg"
import { UserMenu } from "../UserMenu/UserMenu.jsx";
import "./style.css"


 export const HeaderUser = ({OpenHeaderUser, openUserMenu}) => {
    return (
    
            <div className='header-user'>
        <div className='container'>
            <div className='header-wrap'>
                <a className='header_logo' href="index.html">
                    Light
                </a>
                <nav className='header_nav'>
                    <ul className='nav-list'>
                        <li className='nav-list_item'>
                            <a href="/home" class="nav-list_link">Home</a>
                        </li>
                        <li className='nav-list_item'>
                            <a href="/company" class="nav-list_link">Company</a>
                        </li>
                        <li className='nav-list_item'>
                            <a href="/features" class="nav-list_link">Features</a>
                        </li>
                        <img className='smallavatar'src={smallavatar} alt="uuu"></img>
                    </ul>
                </nav>
            </div>
        </div>
        <UserMenu />
    </div>
    
    );
}


