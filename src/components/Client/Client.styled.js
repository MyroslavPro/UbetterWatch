import styled from "styled-components";

export const ClientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 1em;
    padding: 1em;
    
    background-image: linear-gradient(to top right, lightblue,#813745A3);
    border: 0.15em solid #ffffffa3 ;
    border-radius: 8px;
    box-shadow: 0 0.5em 1.5em darkcyan;    

    animation: thisappearance 1.5s ease-in-out;
    
    @keyframes thisappearance {
       0% {
            transform:translateX(-100%);
            opacity: 0.2;
             //transform:scale(50%); 
        }

       80% {
            transform:translateX(2%);
            opacity: 0.95;
        }

       100% {
            transform:translateX(0);
            opacity: 1;
        }

    };

    h3 {
        color: white;
        font-weight: bold;
    }
    
    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;  
        margin: 1em;
        background-color: #191a1a;
        border: 1px solid #192841d4;
        border-radius: 1em;
        color: #ffffff;
        padding: 0.5em 1em ;
        min-height: 14em;
        
        > hr {
            width: 100%;
            align-self: start;
        }
    } 
    
`    
    
export const TextInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5em;
    /* background-color: #152238; */
    margin-bottom: 0.5em;
    
`
export const VisualandAudioInfo = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    color: white;
`