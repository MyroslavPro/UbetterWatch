import styled from "styled-components";

export const ClientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 1em;
    padding: 1em;
    background-color: whitesmoke;
    border: 1px solid gray ;
    border-radius: 10px;
    min-width: 70%;

    h3 {
        color: white;
        text-shadow: 0.5px 0.5px white;
    }
    
    section{
        display: flex;
        flex-direction: column;
        align-self: center;  
        margin: 1em;
        background-color: #152238;
        border: 1px solid #192841d4;
        border-radius: 10px;
        color: #ffffff;
        padding: 0.5em 2em;
    } 
    
    padding: 1em;
    background-color: whitesmoke;
    border: 1px solid gray ;
    border-radius: 10px;
`    
    
export const TextInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5em;
`
export const VisualandAudioInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`