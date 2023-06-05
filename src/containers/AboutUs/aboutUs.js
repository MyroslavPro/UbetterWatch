import { render } from '@testing-library/react';
import React from 'react';

import teamImg from "../../images/teamImage.png";
import { TeamWrapper } from './aboutUs.styled';

export default function AboutUs(){
    return(
    <TeamWrapper>
        <h1>NASYP</h1>
        <img src={teamImg}  alt="our team of five members"/>
        <p>Here is our Team: Nikita Kiselov – Team mentor,<br/> Yulian Shkrum – Project Manager, Business Analythics
        and Product Manager.<br/> Oleg Seneta – Team Lead and Hardware Engineer.<br/> Myroslav Pronyshyn –
         Front-End Developer.<br/> Bohdan Bodakva – Back-End Developer and Database Engineer,
         <br/> Svyatoslav Tsar – Cloud Engineer.</p>

         <h2>Solution</h2>
         <p style={{marginTop:"2em"}}>Let us Introduce you -  the UBETTERWATCH bracelet. 
        It keeps you updated on the location of the person, who you are looking after, and notifies when danger occurs.
        Also users can send the recording of the surroundings and send it to the supervisor, who can then act accordingly.
         So we are here to help you look after people you care about. </p>
         
         
    </TeamWrapper>);
}