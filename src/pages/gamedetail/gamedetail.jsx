import React, { useEffect, useState } from 'react';
import {GameCard} from '../../components/card'
import {Header} from '../../components/pageheader'
import { getGameList } from '../../services/fetch-service';
import { useCommentList } from '../../context';
import { SearchBar } from '../../components/searchbar';
import { CardEncapsulation } from '../../components/card/card.styles';

export function GameDetail () {

  let {gameList, setGameList, searchTerm} = useCommentList()

useEffect (()=>{
  getGameList().then(setGameList);
},[])

  return (
    <>
      <Header />
      <h1>Lista de Games</h1>
      <SearchBar />
      <CardEncapsulation>
        {
        gameList.filter((val)=>{
          if(searchTerm =="") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((item) => (
          <GameCard
            key={item.id}
            title={item.title}
            image={item.thumbnail}
            description={item.short_description}
            platform={item.platform}
            id={item.id}
          />
        ))}
      </CardEncapsulation>
    </>
  );

}