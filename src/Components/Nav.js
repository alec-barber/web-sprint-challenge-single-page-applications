import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavStyle = styled.nav`
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    border: solid 1px black;
    border-radius: 5px;

    a {
        font-size: 1.6rem;
        color: rgb(225, 20, 5);
        text-decoration: none;
    }

    a:hover {
        font-size: 1.6rem;
        color: gray;
    }
`

export default function Nav (props) {

    return (
        <NavStyle>
            <nav>
                <Link to="/">Home</Link>&nbsp;
                <Link to="help">Help</Link>
            </nav>
        </NavStyle>
    )
}