import React from 'react';
import { Link } from 'react-router-dom';
import { NewsPageCarg, NewsPageImage, NewsPageContent } from './newscard.style'

export function NewsCard( props ) {

  return (
    <NewsPageCarg>
      <NewsPageImage src={props.image} />
      <NewsPageContent>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <Link to={{ pathname: (props.link) }} target="_blank">Ver no Site</Link>
      </NewsPageContent>
    </NewsPageCarg>
  );
}

