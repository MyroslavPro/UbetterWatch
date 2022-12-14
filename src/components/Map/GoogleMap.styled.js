import styled from "styled-components";

export const MapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 25em;
    width: 45em;
    .backToClientbtn {
        position:absolute ;
        margin: 0.5em;
        font-size: larger;
        background-color: #F4EBD0;
        border-radius: 5px;
        text-decoration: none;
        color: black;
        border: 1px solid gray;
        padding: 0.5em 1em;
        cursor: pointer;
        justify-content: center;   
    }
`