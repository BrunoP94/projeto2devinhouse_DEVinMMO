import React, { useEffect, useState } from "react";
import {Header} from '../../components/pageheader'
import { useParams } from 'react-router-dom'
import { SlideShow } from "../../components/images/images";
import { GameText } from "../../components/gametext";
import { CommentForm } from "../../components/commentform/commentform";
import { CommentSection } from "../../components/comments/comments";

export function GameInfo () {
    const { id } = useParams();
    let [gameInfo, setGameInfo] = useState([]);

    useEffect(()=>{async function getGameInfo() {
        try {
          const responseGameInfo = await fetch(
            `https://mmo-games.p.rapidapi.com/game?id=${id}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key":
                  "b3dc83721amsh15889353fe705b6p14b454jsndfbfebd40617",
              },
            }
          );
          setGameInfo( gameInfo = await responseGameInfo.json())
          
                    
          } catch (erro) {
          console.log(erro);
        }
      }
      getGameInfo();
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