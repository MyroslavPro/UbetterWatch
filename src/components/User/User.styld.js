import styled from "styled-components";

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: 1em;
    width: 90%;

    h1 {
        color: white;
        text-shadow: 1px 1px black;
    }
`
export const HeaderUser = styled.div`
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    padding: 0 3em;
    border-radius: 2em;
    background-color: darkgray;
    max-width: fit-content;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    border: 1px solid ;
    background-color: white;
    padding: 1em;

    ul {
        display: flex;
        align-self: center;
        flex-direction: column;
        padding: 0;
        
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.5em 0em;
    }
`