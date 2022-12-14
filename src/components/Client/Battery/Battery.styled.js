
import styled from "styled-components";

export const BatteryWrapper = styled.div`
    padding: 1em ;
    .batteryContainer{
        display: flex;
        align-items: center;
        justify-content:center;
        background: white;
        clip-path: polygon(0% 0%, 94% 0%, 94% 20%, 100% 20%, 100% 80%, 94% 80%, 94% 100%, 0% 100%);
        height: 2em;
        /* border: 3px solid green; */
        width: 5em;
    }

    .insidebattery{
        display: flex;
        background: black;
        align-self: center;
        align-items: center;
        justify-content:center;
        clip-path: polygon(0% 0%, 94% 0%, 94% 20%, 100% 20%, 100% 80%, 94% 80%, 94% 100%, 0% 100%);
        width: 95%;
        height: 90%; 
    }
    .statusFillage{        
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 85%;

        background:  linear-gradient( to right, ${(props)=>props.color},${(props)=>props.color} ${(props)=>props.batteryPers}%, transparent ${(props)=>props.batteryPers}%,transparent);
        /* clip-path: polygon(0% 0%, 94% 0%, 94% 20%, 100% 20%, 100% 80%, 94% 80%, 94% 100%, 0% 100%); */
    }
`