import React from 'react';
import NavComponent from '../Navbar/NavComponent';
import ToastComponent from '../toast/Toast';
import "./Header.css"

const Header = () => {
    return (

        <div>
            <div className='header'>
                <h1 >Hungry Monster</h1>
            </div>
            <NavComponent></NavComponent>
            {/* <ToastComponent></ToastComponent> */}
        </div>
    );
};

export default Header;