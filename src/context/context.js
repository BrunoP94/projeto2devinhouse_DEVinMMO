import React, {useEffect} from "react";
import { useContext, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/darktheme";
import { lightTheme } from "../styles/lighttheme";

const Context = createContext ();

function ContextProvider ({children}) {

    let [comments, setComments] = useState([]);
    let [gameList, setGameList] = useState([]);
    let [searchTerm, setsearchTerm] = useState([]);
    let [darktheme, setDarkTheme] = useState(false);

    function CheckCommentLocalStorage ( id ){
        let CommentArr=[];
        let CommentIndexStr = localStorage.getItem(`CommentIndex_${id}`)
        let CommentIndex = JSON.parse(CommentIndexStr)
        if (CommentIndexStr) {
            for (let indice = 0; indice < CommentIndex; indice++ ){
                let CommentStr = localStorage.getItem(`Comment_${indice+1}_${id}`)
                CommentArr.push(JSON.parse(CommentStr))
                setComments (comments = CommentArr) 
            }
        }
        else{  
            setComments (comments = []);
            }
    }

    function SaveCommentLocalStorage (id, formData) {
        let CommentIndexStr = localStorage.getItem(`CommentIndex_${id}`)
        let CommentIndex = JSON.parse(CommentIndexStr)
        CommentIndexStr = JSON.stringify(CommentIndex+1)
        localStorage.setItem(`CommentIndex_${id}`, CommentIndexStr);
        localStorage.setItem(`Comment_${CommentIndex+1}_${id}`, JSON.stringify(formData));
    }

    function SaveLikeLocalStorage (id, likeindex) {
        let CommentStr = localStorage.getItem(`Comment_${likeindex+1}_${id}`)
        let CommentObj = JSON.parse(CommentStr)
        let LikesNmbr = parseInt(CommentObj.likes)
        CommentObj.likes = LikesNmbr + 1;
        localStorage.setItem(`Comment_${likeindex+1}_${id}`,  JSON.stringify(CommentObj));
        CheckCommentLocalStorage ( id )
    }
    function SaveDisLikeLocalStorage (id, likeindex) {
        let CommentStr = localStorage.getItem(`Comment_${likeindex+1}_${id}`)
        let CommentObj = JSON.parse(CommentStr)
        let LikesNmbr = parseInt(CommentObj.likes)
        CommentObj.likes = LikesNmbr - 1;
        localStorage.setItem(`Comment_${likeindex+1}_${id}`,  JSON.stringify(CommentObj));
        CheckCommentLocalStorage ( id )
    }

    function getThemeLS () {
      const LSthemeStr = localStorage.getItem("dark-theme");
      const LStheme = JSON.parse(LSthemeStr);
      if(LStheme === null) {
        return darktheme}
      else {setDarkTheme(LStheme)
        return LStheme}
    }

    function setThemeLS () {
      localStorage.setItem("dark-theme", JSON.stringify(darktheme));
    }

    function changeThemeLS() {
      const LStheme = getThemeLS ();
      setDarkTheme ((LStheme)=>!LStheme)

    }
    useEffect(getThemeLS,[]);
    useEffect(setThemeLS,[darktheme]);

    return (
      <Context.Provider
        value={{
          comments,
          setComments,
          CheckCommentLocalStorage,
          SaveCommentLocalStorage,
          SaveLikeLocalStorage,
          SaveDisLikeLocalStorage,
          gameList, 
          setGameList,
          searchTerm,
          setsearchTerm,
          getThemeLS,
          changeThemeLS,
          darktheme
        }}
      ><ThemeProvider theme={darktheme? darkTheme : lightTheme}>{children}</ThemeProvider>
      </Context.Provider>
    );
}

function useCommentList (){
    const context = useContext(Context)
    return context
}

function useTheme (){
  const context = useContext(Context)
  return context
}



export {ContextProvider, useCommentList, useTheme}