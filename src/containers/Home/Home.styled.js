import styled from "styled-components";
import PropForVideo from "../../images/product_example_video.jpg";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background:  cover fixed url(${PropForVideo});

    /*#B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    black*/
    > img {
        border-radius: 2em;
        margin: 2em;
    }

    hero
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        margin: 0 1em;
        
        border-bottom:1px solid white;
        /* background-image: linear-gradient(to bottom right,#1a1a1a,#5C4033); */
        /* background-image: linear-gradient(to bottom right,#1a1a1a,rgba(45,140,253,1)); */
        background-image: linear-gradient(to bottom right,#062F4F,#813722);
        text-shadow: 1px 1px black;
        color: whitesmoke;

        p {
            width: 40%;
            line-height: 1.5em;
            text-align: justify;
        }
    }

    button {
        padding: 1em;
        /* background-color: #282828; */
        border: 2px solid white;
        border-radius: 5px;
        background : transparent;
        text-decoration: none;
        color: white;
        font-size: large;
        padding: 0.5em 2em;
        cursor: pointer;
    }
`;


//     display: flex;
//     flex-direction: column;
//     justify-content: end;   
//     width: 250px;
//     height: 360px;
//     padding: 0.5em;
//     margin: 2em;
//     font-size: small;
    
//     background: url("https://image.freepik.com/free-photo/summer-holiday-background-beach-accessories-white-wood-copy-space-vacation-travel-item") 
//     no-repeat top,#fffffff9;
//     background-size: contain;
//     border:2px solid rgb(192, 192, 192);
//     border-radius: 15px;
//     box-shadow: 0 30px 34px  rgba(178, 176, 176, 0.25);  
//     h2{
//         line-height: 0.85em;
//     }
// `;