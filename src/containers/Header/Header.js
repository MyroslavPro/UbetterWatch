import React from "react";
// import {HomeContainer,Authorization, Button} from "./Header.styled";
import {HeaderContainer} from "./Header.styled";
import logo from "../../images/teamLogo-modified.png";
import {
    NavLink,
  } from "react-router-dom";


export default function Header(){
    return (
            <HeaderContainer>
                <img src={logo} alt="Logo Items"/>
                <ul>
                    <li>
                        <NavLink end exact to="/" className={({ isActive }) => (isActive ? 'active' : "link")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink end exact to="/about-us" className={({ isActive }) => (isActive ? "active" : "link")}>About Us</NavLink>
                    </li>
                    <li>
                    <NavLink end exact to="/login"  className={({ isActive }) => (isActive ? "active" : "link")}>Log In</NavLink>
                    </li>
                    <li className="divider__sign">/</li>
                    <li>
                    <NavLink end exact to="/sign-up" className={({ isActive }) => (isActive ? "active" : "link")}>Sign Up</NavLink>
                    </li>
                </ul>
            </HeaderContainer> 
    );
};
