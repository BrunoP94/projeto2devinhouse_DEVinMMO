import React, { useEffect, useState } from "react";
import { NewsCard } from "../../components/newscard";
import {Header} from '../../components/pageheader'


export function GameNews () {
let [newsList, setNewsList] = useState([]);
    useEffect (()=>{
        async function GetGamesNews() {
            try {
                const responseGameNews = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                        "x-rapidapi-key": "b3dc83721amsh15889353fe705b6p14b454jsndfbfebd40617"
                    }
                })
                setNewsList(newsList = await responseGameNews.json())
               
            }
            catch (erro) {
                console.log(erro)
            }
        }
        GetGamesNews();
        
    }
    ,[])

    return (
        <>
        <Header/>
        <h1>News</h1>
        {newsList.map((item)=>(
            <NewsCard 
            key={item.id}
            link={item.article_url}
            image={item.thumbnail}
            title={item.title}
            text={item.short_description}
            />
        ))}
        
        </>
    )
}