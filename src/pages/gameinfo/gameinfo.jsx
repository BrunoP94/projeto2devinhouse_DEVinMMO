import React, { useEffect, useState } from "react";
import {Header} from '../../components/pageheader'
import { useParams } from 'react-router-dom'
import { SlideShow } from "../../components/images/images";
import { GameText } from "../../components/gametext";
import { CommentForm } from "../../components/commentform/commentform";
import { CommentSection } from "../../components/comments/comments";
import { getGameInfo } from "../../services/fetch-service";

export function GameInfo () {
    const { id } = useParams();
    let [gameInfo, setGameInfo] = useState([]);

    useEffect(()=>{
      getGameInfo(id).then(setGameInfo)
    },[])

      
    if(gameInfo.screenshots){
     return (
       <>
         <Header />
         <h1>{gameInfo.title}</h1>

         <SlideShow SlideImages={gameInfo.screenshots} />
         <GameText
           genre={gameInfo.genre}
           platform={gameInfo.platform}
           description={gameInfo.short_description}
           requirements={gameInfo.minimum_system_requirements}
         />
         <CommentForm 
         pageid={ id }/>
         <CommentSection 
         pageid={ id }/>

       </>
     );}
    else {
      return (
        <p>Página carregando...</p>
      )
    }
}