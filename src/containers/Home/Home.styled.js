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

    hero{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(to bottom right,#062F4F,#813722);
        
        width: 100%;
        height: 100vh;
        > *{
            width: max-content;
            margin: 5em;
        }
    }
    
    .heroText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0 1em;
        /* max-width: 100em !important; */
        
        /* background-image: linear-gradient(to bottom right,#1a1a1a,rgba(45,140,253,1)); */
        
        text-shadow: 1px 1px black;
        color: whitesmoke;

        p {
            max-width: 40vw;
            line-height: 1.5em;
            text-align: justify;
            margin-bottom: 2em;
        }
    }
`;
