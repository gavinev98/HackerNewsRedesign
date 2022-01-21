import React from 'react';
import LogoImage from '../../assets/hackernewslogo.png';


const Logo = () => {
    return (
        <img src={LogoImage} width="400" height="100" className="d-inline-block align-top" alt="hackernewslogo"/>
    );
};

export default Logo;