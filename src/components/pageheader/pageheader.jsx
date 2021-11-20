import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader, PageHeaderButton, PageHeaderButtonEncapsulation } from './pageheader.style'
import { useCommentList } from '../../context';

export function Header (){
    let { changeThemeLS } = useCommentList(); 
    let history = useHistory();
    return(
        
        <PageHeader>
            <h2>DEVinMMO</h2>
            <PageHeaderButtonEncapsulation>
                <PageHeaderButton onClick={()=>(history.push('/'))}>Games</PageHeaderButton>
                <PageHeaderButton onClick={()=>(history.push('/news'))}>Notícias</PageHeaderButton>
                <PageHeaderButton onClick={()=>changeThemeLS()}>Tema</PageHeaderButton>
            </PageHeaderButtonEncapsulation>
        </PageHeader>
        
    )
}