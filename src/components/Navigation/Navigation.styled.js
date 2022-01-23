import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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

export const StyledLink = styled(NavLink)`
    margin-right: 20%;
    font-family: Tahoma, Verdana, sans-serif;
    font-size:18px;
    color:black;
    text-decoration:none;

    &:hover {
        font-family: Tahoma, Verdana, sans-serif;
        color: #ff6600;
        text-underline-position: under;
        text-decoration: underline;
    }

    @media (min-width:320px)  { 
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        margin-right: 5%;
        font-family: Tahoma, Verdana, sans-serif;
        font-size:15px;
        }

    @media (min-width:600px)  { 
        /* tablets, iPad, eReader */ 
            margin-right: 5%;
            font-family: Tahoma, Verdana, sans-serif;
    }


    @media (min-width:1025px)  { 
        /* desktop */ 
            margin-right: 10%;
            font-family: Tahoma, Verdana, sans-serif;
            font-size:18px;
    }

   
`

