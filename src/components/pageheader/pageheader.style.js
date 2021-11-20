import styled from "styled-components";

export const PageHeader = styled.header`
    width: auto;
    color: white;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10% 0 5%; 
    height: 60px;
`;

export const PageHeaderButtonEncapsulation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const PageHeaderButton = styled.button`
    width: 60px;
    height: 30px;
    border: none #1C6EA4;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    border-radius: 3px;
    &:hover {
        background-color:rgb(216, 216, 218);    
    }
    &:active {
        background-color: rgb(216, 216, 218);
        border: 3px inset rgb(216, 216, 255);
      } 
`;


