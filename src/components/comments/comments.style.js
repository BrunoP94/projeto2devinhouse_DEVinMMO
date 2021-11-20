import styled from "styled-components";

export const CommentEncapsulation = styled.div`
display: flex;
flex-direction: row;
margin:10px;
gap: 20px;
`;

export const TextComment = styled.div`
display: flex;
flex-direction: column;
gap:5px;
font-size:15px;
width:400px;
`;

export const LikesComment = styled.div`
display: flex;
flex-direction: row;
gap:5px;
align-items: center;
`;

export const LikesButton = styled.button`
background-color: transparent;
border: 0px solid transparent;
color:${({ theme }) => theme.color.like};
`;

export const DisLikesButton = styled.button`
background-color: transparent;
border: 0px solid transparent;
color:${({ theme }) => theme.color.dislike};
`;

export const LikeNmbr = styled.p`
color: ${(props)=>props.likes > 0 ? ({ theme }) => theme.color.like : ({ theme }) => theme.color.dislike};
font-weight: bold;
`;

