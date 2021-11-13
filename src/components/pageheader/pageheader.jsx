import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader } from './pageheader.style'

export function Header (){

    let history = useHistory();
    return(
        
        <PageHeader>
            <h2>DEVinMMO</h2>
            <div>
                <button onClick={()=>(history.push('/'))}>Games</button>
                <button onClick={()=>(history.push('/news'))}>Notícias</button>
            </div>
        </PageHeader>
        
    )
}