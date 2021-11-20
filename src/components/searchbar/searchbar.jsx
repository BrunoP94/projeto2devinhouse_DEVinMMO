import React, {useState} from 'react';
import { Formik, Field, Form } from "formik";
import { Searchbutton } from './searchbar.style';
import { useCommentList } from '../../context';

export function SearchBar (){
    let {searchTerm, setsearchTerm} = useCommentList()
    let [visiblemessage, setVisiblemessage] = useState(false);
    return(
  
        <>
        <Formik 
      initialValues ={{
        title:""
    }}
    onSubmit={(values, {resetForm})=>{
    setsearchTerm (values.title)
    setVisiblemessage(true);
        resetForm()}}>
        {({resetForm})=> {
          return (
          <Form>
        <Field className="searchBar" name="title" type="text" placeholder="Busca por título" />
        <Searchbutton type="submit">Pesquisar</Searchbutton>
        <Searchbutton type="reset" onClick={()=>{resetForm(); setsearchTerm([]); setVisiblemessage(false)}}>Nova Busca</Searchbutton>
        {visiblemessage ? 
        <p className="searchResultText" style={{visibility:"visible" }}>Exibindo resultados para busca "{searchTerm}"</p>
        : 
        <p className="searchResultText" style={{visibility:"hidden" }}>Exibindo resultados para busca "{searchTerm}"</p>
        }
        
        </Form>
      )}}
      </Formik>
        </>
        
    )
}