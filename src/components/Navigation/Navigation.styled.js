import styled from "styled-components";

//adding additional paddings between logo and navbar items.
export const NavItems =  styled.nav`
    padding-left: 60%;
    display:flex;
    color:black;

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        display:contents;


        }
 }
`