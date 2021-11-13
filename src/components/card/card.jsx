import React from 'react';
import {useHistory} from 'react-router-dom';
import { Card, GameImage, PlataformText, CardGameTitle, CardGameInfo, CardText } from './card.styles'

export function GameCard( props ) {
const history = useHistory();

  return (
    <Card>
      <GameImage src={props.image} />
      <CardGameTitle>
        <h4>{props.title}</h4>
        <PlataformText>{props.platform}</PlataformText>
      </CardGameTitle>
      <CardGameInfo>
      <CardText>{props.description}</CardText>
        <button onClick={()=>history.push(`/${props.id}`)}>Ver Mais</button>
      </CardGameInfo>
    </Card>
  );
}