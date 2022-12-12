import React from "react";
import Battery from "./Battery/Battery";
import { ClientWrapper, TextInfo, VisualandAudioInfo } from "./Client.styled";
import ImageProp from "../../images/mapexample.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Client({client}) {
  return (<ClientWrapper>
    <TextInfo>
      <section>
        <h3>Client {client.name} {client.surname}</h3>
        <p> Birthday: {client.birthday}</p>
      </section>
      <section>
        <p>SimCard Connection: {client.simConnection}</p>
        <p>Data: {client.bracletData}</p>
      </section>
      <section>
        <Battery battery = {client.battery}/>
      </section>
      
    </TextInfo>
    <VisualandAudioInfo>
      <p style={{textShadow:"1px 1px black"}}>Coordinates: {client.coordinatesX}N {client.coordinatesY}E</p>
      <img style={{width:"30em"}} src={ImageProp}></img>
    </VisualandAudioInfo>
    
    
  </ClientWrapper>)
};




