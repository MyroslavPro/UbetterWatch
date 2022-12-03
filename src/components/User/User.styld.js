import styled from "styled-components";
/*  #B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    black*/
import Plus from '../../images/icons-plus.svg';

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* align-self: center;
    align-items: center; */
    justify-content: center;

    h1 {
        color: white;
        text-shadow: 1px 1px black;
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: space-around;
    align-items: center;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #062F4F 0%, #223CBB 100%);
    z-index: 1;
    box-shadow: 0.25em 0 0.4em black;
    padding: 2em;
    .addClient {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-image: url(${Plus});
        background-size: cover;
        border: 0;

    }
`
export const ClientInfo = styled.section`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    background-color: #062F4F;
    padding: 1em;
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