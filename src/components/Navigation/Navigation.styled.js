import styled from "styled-components";
import { NavLink } from 'react-router-dom';


//adding additional paddings between logo and navbar items.
export const NavItems = styled.nav`
    padding-left: 60%;
    display:flex;

    @media (min-width:320px)  { 
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
    padding:0;
    }

 }
`
//adding additional styling to each individual nav link item.
export const StyledLink = styled(NavLink)`
    margin-right: 20%;
    font-size:18px;
    color:black;
    text-decoration:none;

    &:hover {
        color: #ff6600;
        text-underline-position: under;
        text-decoration: underline;
    }

   
`

