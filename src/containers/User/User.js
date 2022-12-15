import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonClassic } from "../../components/ButtonClassic/buttonClassic.styled";
import Client from "../../components/Client/Client";
import ClientList from "../../components/ClientList/ClientList";
import ClientNotSelected from "../../components/ClientNotSelected/ClientNotSelected";
import { UserInfo, UserWrapper,ClientInfo } from "./User.styled";
import {motion} from "framer-motion"
import Loader from "../../components/Loader/Loader.styled";
import { setClients } from "../../redux/slice";
import { getAllClients } from "../../api/api";



export default function User() {
  // const [clientList,setClientList] = useState([...clients]);
  const clientSelected = useSelector(state=>state.clientkit.selectedClient);
  const clientShown = useSelector(state=>state.clientkit.isClientActive);
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    setLoader(true);
    getAllClients()
        .then((res)=>{
          return (Object.values(res));
        })
        .then((res)=>dispatch(setClients([...res])))
    setTimeout(() => setLoader(false), 3400);
  },[]);


    return (
    <UserWrapper>
      {loader ?  <div className="LoaderWrapper">
          <Loader/>
          <h2>Loading. Please, wait...</h2>
        </div> :
      <>
      <UserInfo>  
        <h1>User</h1>
        <ClientList/>
        <button className="addClient"></button>
        <ButtonClassic onClick={()=>navigate("/")} >Log out</ButtonClassic>
      </UserInfo>      
      <ClientInfo>
         {
         clientShown ? <Client key={clientSelected.braceletId} client={clientSelected}/> : <ClientNotSelected/>
         //clientShown ? <motion.div animate= {{x:[-200,-33,-32,0]}}><Client key={clientSelected.braceletId} client={clientSelected}/> </motion.div>: <ClientNotSelected/>
         } 
      </ClientInfo>
      </>}
    </UserWrapper>)
};