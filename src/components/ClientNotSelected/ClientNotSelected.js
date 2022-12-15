import React from 'react';
import { ClientNotSelectedStyled } from './ClientNotSelected.styled';
import ImageClientNotFound from '../../images/сlientNotChosen.png';
import { ButtonClassic } from '../ButtonClassic/buttonClassic.styled';

export default function ClientNotSelected() {
    return(
        <ClientNotSelectedStyled>
            <img src={ImageClientNotFound} alt='Select or create client'/>
            <h2>Select your client</h2>
            <p>If you haven't connected any braclet/client to your account<br/>
                you can do it here..
            </p>
            <ButtonClassic>New Client</ButtonClassic>
        </ClientNotSelectedStyled>
        );
    
}