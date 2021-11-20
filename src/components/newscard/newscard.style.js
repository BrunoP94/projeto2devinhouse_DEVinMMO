import styled from "styled-components";

export const NewsPageCarg = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    border-bottom: 3px solid ${({ theme }) => theme.color.secondary};;
    gap: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    
`;

export const NewsPageImage = styled.img`
    width: 200px;
    gap: 5px;
    margin-left: 15px;

`;

export const NewsPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`;
