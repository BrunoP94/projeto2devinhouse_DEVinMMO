import React, {useEffect} from "react";
import { CommentEncapsulation, LikesComment, TextComment, LikesButton } from "./comments.style";
import {BiDislike, BiLike} from 'react-icons/bi';
import { IconContext } from "react-icons";
import { useCommentList } from "../../context";


export function CommentSection ( props ) {  

    let {comments, CheckLocalStorage } = useCommentList(); 

    useEffect(()=>(
        CheckLocalStorage(props.pageid)
        
    ),[])

    if(comments){
      return (
          <>
          {comments.map((item)=>(
        <CommentEncapsulation>
          <TextComment>
            <h4>{item.name}</h4>
            <span>
            {item.comment}
            </span>
          </TextComment>
          <LikesComment>
            <IconContext.Provider
              value={{ color: " rgb(0, 75, 0)", size: "1.5em" }}
            >
              <LikesButton onClick={() => console.log("like button")}>
                <BiLike />
              </LikesButton>
            </IconContext.Provider>
            <p>{item.likes}</p>
            <IconContext.Provider
              value={{ color: " rgb(75, 0, 0)", size: "1.5em" }}
            >
              <LikesButton onClick={() => console.log("dislike button")}>
                <BiDislike />
              </LikesButton>
            </IconContext.Provider>
          </LikesComment>
        </CommentEncapsulation>
        ))}
        </>
      );}
      else {
          return (
              <p>Sem Comentários. Seja a primeira pessoa a passar um feedback sobre o jogo!</p>
          )
      }
     
    }
