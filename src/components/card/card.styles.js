import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    height: 420px;
    background-color: ${({ theme }) => theme.color.card};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
`;

export const GameImage = styled.img`
    width: 280px;
    border-radius: 0px;
    padding-top: 5px;
`;

export const CardGameTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const PlataformText = styled.span`
    font-size: 10px;
`;

export const CardText = styled.p`
    
    width: 95%;
    height: 180px;
    overflow-y: scroll;
    text-overflow: ellipsis;
        &::-webkit-scrollbar {
        width: 10px;
        }
        
        &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
        background: rgb(100, 100, 100); 
        border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
        background:rgb(54, 56, 58); 
        }

`;

export const CardGameInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const CardEncapsulation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 10px;
    justify-content: space-evenly;
`;


