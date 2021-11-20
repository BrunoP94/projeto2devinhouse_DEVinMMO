import React, { useEffect, useState } from "react";
import { NewsCard } from "../../components/newscard";
import { Header } from "../../components/pageheader";
import { GetGamesNews } from "../../services/fetch-service";
import { SearchBar } from "../../components/searchbar";
import { useCommentList } from '../../context'; 

export function GameNews() {
  let [newsList, setNewsList] = useState([]);
  let {searchTerm} = useCommentList()

  useEffect(() => {
    GetGamesNews().then(setNewsList);
  }, []);

  return (
    <>
      <Header />
      <h1>News</h1>
      <SearchBar />
      {newsList.filter((val)=>{
          if(searchTerm =="") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((item) => (
        <NewsCard
          key={item.id}
          link={item.article_url}
          image={item.thumbnail}
          title={item.title}
          text={item.short_description}
        />
      ))}
    </>
  );
}
