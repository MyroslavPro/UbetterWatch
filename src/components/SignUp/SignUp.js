import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../containers/Header/Header.styled";
import { Form , GetInStyled} from "../GetIn/GetIn.styled";

export default function SignUp() {
    const navigate = useNavigate();
    return (
    <GetInStyled>
      <h1>Sign Up</h1>
      <Form>
        <ul>
          <li>
            <label for="name">Name</label>
            <input type="text" name="user_name"/>
          </li>
          <li>
            <label for="mail">Email</label>
            <input type="mail" name="user_email" />
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="user_password" />
          </li>
          <li>
            <label for="password">Confirm Password</label>
            <input type="password" name="user_password" />
          </li>
        </ul>
        <NavLink end exact to="/login">Signed up already? Log in</NavLink>
        <Button color="#007fff" onClick={()=>navigate("/user") }>Continue</Button>
      </Form>
    </GetInStyled>)
};
