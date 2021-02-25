import React from 'react';
import  './Header.css';
import logo from './img/Bluestack.png';

function Header(){
    return(
        <div className="header">
            <img className="header-img" src={logo}
             />
             <div className="header-text">
                 <div className="blue">BlueStacks</div>
                 <div className="play">Play Bigger</div>
             </div>
        </div>
    )
}

export default Header;