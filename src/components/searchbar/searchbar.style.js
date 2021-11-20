import styled from "styled-components";

export const Searchbutton = styled.button`
    width: 90px;
    height: 30px;
    border: 1px solid rgb(120, 120, 120);
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    border-radius: 3px;
    margin-left: 10px;
    background-color: rgb(220,220,220);
    &:hover {
        background-color:rgb(190, 190, 190);    
    }
    &:active {
        background-color: rgb(220, 220, 220);
        border: 3px inset rgb(150, 150, 155);
      } 
`;


