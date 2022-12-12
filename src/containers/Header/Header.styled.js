import styled from "styled-components";

export const HeaderContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(0,0,0);
    box-shadow: rgb(26 31 51) 0px 0.5rem 1rem 0px;
    color: white;
    font-size: large;
    border: 1px solid black;
    padding: 0.5em 2em;

    img {
        width: 5%;
        height: 5%;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style-type: none;
        
        align-self: center;
        align-items: center;
        
        li{
            margin: 0 0.5em;
        }
        .divider__sign{
            margin: 0 -0.2em;
        }

    }
     
    a {
        padding: 0.5em;
        background-color: transparent;
        
        text-decoration: none;
        color: white;
    }

    .active {
        border-radius: 5px;
        background-color: white;
        color: black;
        
    } 

    h1{
        font-size: larger;
        color : black
    }
`

export const Button = styled.button`
    margin: 0.5em;
    padding:  0.25em 0.5em;
    font-size: larger;
    color: ${(props) => props.color};
    background: transparent;
    border-radius: 0.5em;
    border: 2px solid ${(props) => props.color};
    cursor: pointer;
    padding: 0.5em 2em;

    :hover{
        transition: 0.3s;
        background-color:${(props) => props.color} ;
        color: #fff;
    }
`