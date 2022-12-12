import React from 'react';
import { ClientButtonStyled } from './ClientButton.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clickedToView } from '../../../redux/slice';

const runBtnAnimation = (id) => {
    const selectedButton = document.getElementById(`btn__id__${id}`);
    const selectedIndicator = selectedButton.getElementsByClassName("triangle")[0];
    const allBtns = document.getElementsByClassName('active');

    if (selectedButton.classList.contains('active')){
        selectedButton.classList.remove('active')
        selectedIndicator.style.transform = 'rotate(0deg)';
        selectedButton.style.background =  'linear-gradient(to left, black,#062F4F)';
        
    }
    else if(!selectedButton.classList.contains('active')) {
        Array.from(allBtns).forEach(btn => {
            // Remove class from each element
            btn.classList.remove('active');
            btn.style.background = 'linear-gradient(to left, black,#062F4F )';
            btn.getElementsByClassName("triangle")[0].style.transform = 'rotate(0deg)';
          });
        selectedButton.classList.add('active')
        selectedIndicator.style.transform = 'rotate(-90deg)';
        selectedButton.style.background = '#062F4F';
        
    }
    
}

export default function ClientButton ({id, name, surname,client}) {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    
    const toggleClass = () => {
        setActive(!isActive);
      };
    return (
            <ClientButtonStyled id={`btn__id__${id}`} 
                onClick={()=>{
                    toggleClass();
                    runBtnAnimation(id);
                    return dispatch(clickedToView(client));
                    }}>
                <p>{name} {surname}</p>
                <div className="triangle-container">
	                <svg height="20" width="40">
		                <polygon points="0,0 10,10 20,0" className="triangle" />
	                </svg>
                </div>
            </ClientButtonStyled>
        
    );
} 