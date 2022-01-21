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

    @media (min-width:600px)  { 
        /* tablets, lanscape */ 
            margin-right: 6.5%;
    }

    @media (min-width:801px)  { 
        /* tablets, lanscape */ 
            margin-right: 6.7%;
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

    @media (min-width:320px)  { 
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        margin-right: 5%;
        font-size:15px;
        }

    @media (min-width:600px)  { 
        /* tablets, iPad, eReader */ 
            margin-right: 5%;
    }


    @media (min-width:1025px)  { 
        /* desktop */ 
            margin-right: 10%;
            font-size:18px;
    }

   
`

