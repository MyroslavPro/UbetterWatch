import React from "react";
import {HomeContainer} from "./Home.styled";
import PropForVideo from "../../images/product_example_video.jpg";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
    return (
        <HomeContainer>
            <hero>
                <h1>What is UBetterWatch?</h1>
                <p> 
                    Our design is a bracelet for the elderly/disabled those who need someone else's care.
                     This bracelet will detect a fall, record a sample of the surroundings,
                    with its help you can record audio and send it to the person who cares for this person. This device will help the caretaker to constantly monitor the situation online and, if necessary, react to danger.
                </p> 
                <button onClick={()=>navigate("/sign-up")}>Get Started</button>
            </hero>
            {/* <h2>*There's gonna be a video(here)*</h2>
            <img src={PropForVideo} alt="video-here"/> */}
        </HomeContainer>  
    );
};