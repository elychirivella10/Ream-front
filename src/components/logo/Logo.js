import React from 'react';
import LogoFixed from './Logo.svg'

const Logo = () => {
    return (
        <div className="o-layout-logo">
            <img src={LogoFixed} alt="Logo" className = "dis-inline-block sizefull"/>
        </div>
    );
}

export default Logo;
