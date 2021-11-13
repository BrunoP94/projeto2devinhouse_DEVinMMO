import React, { useEffect, useState } from 'react';
import {GameCard} from '../../components/card'
import {Header} from '../../components/pageheader'

export function GameDetail () {

  let [gameList, setGameList] = useState([]);

useEffect(()=>{async function getGameList() {
    try {
      const responseGameList = await fetch(
        "https://mmo-games.p.rapidapi.com/games",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key":
              "b3dc83721amsh15889353fe705b6p14b454jsndfbfebd40617",
          },
        }
      );
      setGameList( gameList = await responseGameList.json())
      } catch (erro) {
      console.log(erro);
    }
  }
  getGameList();
  },[])

  return (
    <>
      <Header />
      <h1>Lista de Games</h1>
      <input className="searchBar"></input>
      <div className="cardlist">
        {gameList.map((item) => (
          <GameCard
            key={item.id}
            title={item.title}
            image={item.thumbnail}
            description={item.short_description}
            platform={item.platform}
            id={item.id}
          />
        ))}
      </div>
    </>
  );

}