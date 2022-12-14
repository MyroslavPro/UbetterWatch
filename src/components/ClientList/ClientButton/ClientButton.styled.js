import styled from "styled-components";

export  const ClientButtonStyled = styled.button`
    display: flex;
    flex-direction: row;
    // border: 1px solid linear-gradient(from left to right black,gray );
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 0 0 0.4em lightgray;
    //background-color: #062F4F;
    background: linear-gradient(to left, black,#062F4F );
    justify-content: space-between;
    align-items: center;
    width: 150%;
    padding:0.65em 1em;
    
    color: white;
    text-shadow: 1px 1px black;
    font-size: larger;

    :hover{
        background: black;
         //linear-gradient(from left to right black,gray );
    }
    
    .active {
        display: none;
//        .triangle{background-color:red}
    }
    

    .triangle-container{
        width: 20px;
        text-align:center;
        margin: 0.5em;
        transform : rotate(0deg);
  
    .triangle{
        fill: gray;
        stroke: white;
        stroke-width: 2;
        transition: all 0.5s ease-in-out;
        transform-origin: 20px 0px;
    }
}
    

    @keyframes rotateImg {
       0% {transform:rotate(0deg);}
       100% {transform:rotate(-90deg);}
    };
`

