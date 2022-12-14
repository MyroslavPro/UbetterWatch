import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../containers/Header/Header.styled";
import { Form , GetInStyled} from "../GetIn/GetIn.styled";

export default function SignIn() {
    const navigate = useNavigate();
    return (
    <GetInStyled>
      <h1>Sign In</h1>
      <Form>
        <ul>
          <li>
            <label for="email">Email</label>
            <input type="email" name="user_email"/>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="user_password"/>
          </li>
        </ul>
        <NavLink end exact to="/sign-up">New here? Maybe sign up.. </NavLink>
        <Button color="#FF8C00" onClick={()=>navigate("/user") }>Log In</Button>
      </Form>
    </GetInStyled>)
};
