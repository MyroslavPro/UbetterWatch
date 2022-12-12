import React from 'react';
import { useSelector } from 'react-redux';
import ClientButton from './ClientButton/ClientButton';
import { ClientListWrapper } from './ClientList.styled';
import { list } from './list';

export default function ClientList(){
  //const clntList = useSelector((state)=>{console.log(state.clients); return (state.clients)})
  //const clntList = list
  const clntList = useSelector(state=>state.clientkit.clients)
    return(
        <ClientListWrapper>
           {clntList.map((client)=><ClientButton
            key={client.braceletId}
            id={client.braceletId}
            name={client.name}
            surname = {client.surname}
            client = {client}
            //age = {client.birth}
            />)}

        </ClientListWrapper>
    );
}