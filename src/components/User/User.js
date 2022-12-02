import React, { useState } from "react";
import Client from "../Client/Client";
import { HeaderUser, UserWrapper, } from "./User.styld";
// import { Button } from "../../containers/Header/Header.styled";


let clients = [
  {
    bracletId: 1,
    name : "John ",
    surname :"Smith ",
    bracletData :"x443gfds",
    simConnection: "Mild",
    coordinatesX: 41.40338,
    coordinatesY: 2.17403,
    battery: 100
  },
  {
    bracletId: "2",
    name : "Jack ",
    surname :"Sparrow ",
    bracletData :"gx44agjj",
    simConnection: "Bad",
    coordinatesX: 31.6,
    coordinatesY: 6.44,
    battery: 95
  },
  {
    bracletId: "3",
    name : "Rock",
    urname :"Jonson",
    bracletData :"dahah",
    simConnection: "Good",
    battery: 75
  }
];


export default function User() {
  const [clientList,setClientList] = useState([...clients]);
    return (<UserWrapper>
      <HeaderUser>  
        <button style={{marginRight: '5em'}}>Add</button>
        <h1>Hi, User</h1>
      </HeaderUser>
      {clientList.map((client)=> <Client key={client.bracletId} props={client} />)}
    </UserWrapper>)
};