import styled from "styled-components";
import { Link } from 'react-router-dom';

//adding additional paddings between logo and navbar items.
export const NavItems = styled.nav`
    padding-left: 60%;
    display:flex;


    /*media queries for mobile devices */
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        display:grid;
        padding:0;
        }
 }
`

export const StyledLink = styled(Link)`
    margin-right: 20%;
    color:black;
    text-decoration:none;
    &:hover {
        color: #ff6600;
        text-decoration: underline;
      }

`