import styled from "styled-components";
/*  #B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    black*/
import Plus from '../../images/icons-plus.svg';
import UserMenu from '../../images/user_menu.jpg';
import  clientBackground from '../../images/clientBckgrnd.jpg';

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: max-content;
    justify-content:space-around;
    background: linear-gradient(to right, #3e0000 20%, #062F4F);
    h1 {
        color: white;
        text-shadow: 1px 1px black;
    }

    .LoaderWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        > * {
            margin: 1em 0;
        }
        h2 {
            color: white;
        }
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #8BC6EC; */
    /* background-image: linear-gradient(135deg, #062F4F 0%, #02051E 100%); */
    background: center top no-repeat url(${UserMenu}) ;
    background-size: cover;

    z-index: 2;
    box-shadow: 0.25em 0 0.4em black;
    padding: 2em;

    width: 20%;

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
    /* background: url(${clientBackground}); */
    background-color: #062F4F;
    padding: 1em;
    width: 80%;
`