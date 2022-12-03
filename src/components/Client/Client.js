import React from "react";
import Battery from "./Battery/Battery";
import { ClientWrapper, TextInfo, VisualandAudioInfo } from "./Client.styled";
import ImageProp from "../../images/mapexample.png";

//Client({name,surname,bracletData,simConnection,coordinatesX,coordinatesY,battery})
export default function Client({props}) {
    return (<ClientWrapper>
      <TextInfo>
        <section>
          <h3>Client: {props.name} {props.surname}</h3>
        </section>

        <section>
          <h4>Data: {props.bracletData}</h4>
        </section>

        <section>
          <p>SimCard Connection: {props.simConnection}</p>
        </section>
        <section>
          <Battery battery = {props.battery}/>
        </section>
        
      </TextInfo>
      <VisualandAudioInfo>
        <p>Coordinates: {props.coordinatesX}N {props.coordinatesY}E</p>
        <img style={{width:"30em"}} src={ImageProp}></img>
      </VisualandAudioInfo>
      
      
    </ClientWrapper>)
};
