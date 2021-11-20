import React, {useEffect} from "react";
import { CommentEncapsulation, LikesComment, TextComment, LikesButton, DisLikesButton, LikeNmbr} from "./comments.style";
import {BiDislike, BiLike} from 'react-icons/bi';
import { IconContext } from "react-icons";
import { useCommentList } from "../../context";


export function CommentSection ( props ) {  

    let {comments, CheckCommentLocalStorage, SaveLikeLocalStorage, SaveDisLikeLocalStorage } = useCommentList(); 
    
    useEffect(()=>{
      CheckCommentLocalStorage(props.pageid)
        
    },[])
    
    
      return (
          <>
          { comments.map((item, index)=>(
        <CommentEncapsulation key={index}>
          <TextComment>
            <h4>{item.name}</h4>
            <span>
            {item.comment}
            </span>
          </TextComment>
          <LikesComment>
            <IconContext.Provider
              value={{ color: "", size: "1.5em" }}
            >
              <LikesButton onClick={() => SaveLikeLocalStorage(props.pageid, index)}>
                <BiLike />
              </LikesButton>
            </IconContext.Provider>
            <LikeNmbr likes={item.likes}>{item.likes}</LikeNmbr>
            <IconContext.Provider
              value={{ color:"", size: "1.5em" }}
            >
              <DisLikesButton onClick={() => SaveDisLikeLocalStorage(props.pageid, index)}>
                <BiDislike />
              </DisLikesButton>
            </IconContext.Provider>
          </LikesComment>
        </CommentEncapsulation>
        ))}
        </>
      );
      
     
    }
