import React from "react";
import { useContext, useState, createContext } from "react";

const Context = createContext ();

function ContextProvider ({children}) {

    let [comments, setComments] = useState([]);

    function CheckLocalStorage ( id ){
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
        else{  (console.log("não existe comentario ainda"))}
        
    }

    return(
        <Context.Provider value={{comments, setComments, CheckLocalStorage}}>
            {children}
        </Context.Provider>
    )
}

function useCommentList (){
    const context = useContext(Context)
    return context
}


export {ContextProvider, useCommentList}