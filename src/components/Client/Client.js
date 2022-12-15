import React from "react";
import Battery from "./Battery/Battery";
import { ClientWrapper, TextInfo, VisualandAudioInfo } from "./Client.styled";
import ImageProp from "../../images/mapexample.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import GoogleMapLocationBracelet from "../Map/GoogleMapLocationBracelet";

export default function Client({client}) {
  return (<ClientWrapper>
    <TextInfo>
      <h1>Information:</h1>
      <section>
        <h2>Personal</h2>
        <hr/>
        <h3>Client  {client.name} {client.surname}</h3>
        <p> Account created: {client.dateOfRegistration}</p>
      </section>
      <section>
        <h2>Bracelet DATA</h2>
        <hr/>
        <p>SimCard Connection: {client.simConnection}</p>
        <p>Data: {client.braceletData}</p>
      </section>
      <section>
        <Battery battery = {client.battery}/>
      </section>
      
    </TextInfo>
    <VisualandAudioInfo>
      <p style={{textShadow:"1px 1px black"}}>Latitude: {client.coordinatesX}N, Longitude: {client.coordinatesY}E</p>
      {/* <GoogleMapLocationBracelet props ={{coordinatesX: parseFloat(client.coordinatesX),coordinatesX: parseFloat(client.coordinatesY)}}/> */}
      <GoogleMapLocationBracelet props ={client}/>
    </VisualandAudioInfo>
    
  </ClientWrapper>)
};




