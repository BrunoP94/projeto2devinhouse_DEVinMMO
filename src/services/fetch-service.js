export async function getGameList() {
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

    const data = await responseGameList.json();
    return data;
  } catch (erro) {
    console.log(erro);
  }
}

export async function GetGamesNews() {
  try {
    const responseGameNews = await fetch(
      "https://mmo-games.p.rapidapi.com/latestnews",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key":
            "b3dc83721amsh15889353fe705b6p14b454jsndfbfebd40617",
        },
      }
    );
    const data = await responseGameNews.json();
    return data;
  } catch (erro) {
    console.log(erro);
  }
}

export async function getGameInfo(id) {
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
    const data = await responseGameInfo.json();
    return data;
  } catch (erro) {
    console.log(erro);
  }
}