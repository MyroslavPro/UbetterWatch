import React from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonClassic } from "../../components/ButtonClassic/buttonClassic.styled";
import Client from "../../components/Client/Client";
import ClientList from "../../components/ClientList/ClientList";
import ClientNotSelected from "../../components/ClientNotSelected/ClientNotSelected";
import { UserInfo, UserWrapper,ClientInfo } from "./User.styled";
import {motion} from "framer-motion"
// import { Button } from "../../containers/Header/Header.styled";


let clients = [
  {
    braceletId: 1,
    name : "John ",
    surname :"Smith ",
    birthday: "1950-06-06",
    braceletData :"x443gfds",
    simConnection: "Mild",
    coordinatesX: 41.40338,
    coordinatesY: 2.17403,
    battery: 100
  }
];


export default function User() {
  // const [clientList,setClientList] = useState([...clients]);
  const clientSelected = useSelector(state=>state.clientkit.selectedClient);
  const clientShown = useSelector(state=>state.clientkit.isClientActive);
  const navigate = useNavigate();
    return (
    <UserWrapper>
      <UserInfo>  
        <h1>User</h1>
        <ClientList/>
        <button className="addClient"></button>
        <ButtonClassic onClick={()=>navigate("/")} >Log out</ButtonClassic>
      </UserInfo>      
      <ClientInfo>
         {
         //client = clientList.find((client) =>client.id == 1)
         
         clientShown ? <Client key={clientSelected.braceletId} client={clientSelected}/> : <ClientNotSelected/>
         //clientShown ? <motion.div animate= {{x:[-200,-33,-32,0]}}><Client key={clientSelected.braceletId} client={clientSelected}/> </motion.div>: <ClientNotSelected/>
         } 
      </ClientInfo>
    </UserWrapper>
    )
};