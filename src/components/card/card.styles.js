import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    height: 420px;
    background-color: rgb(220,220,220);
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
    width: 100%;
    height: 180px;
    overflow-y: scroll;
    text-overflow: ellipsis;

`;

export const CardGameInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


