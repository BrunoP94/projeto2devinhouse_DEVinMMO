import React from "react";
import { TextEncapsulation, BasicInfoCard, DescriptionCard } from "./gametext.style";
import { GameRequirements } from "../gamerequirements/gamerequirements";

export function GameText( props ) {  

      return (
        <TextEncapsulation>
          <BasicInfoCard>
            <div>
              <h3>Generos</h3>
              <p>{props.genre}</p>
            </div>
            <div>
              <h3>Plataforma</h3>
              <p>{props.platform}</p>
            </div>
          </BasicInfoCard>
          <DescriptionCard>
            <h3>Descrição</h3>
            <p>{props.description}</p>
          </DescriptionCard>
        <GameRequirements  
        requirements={props.requirements}
        />

        </TextEncapsulation>
      );
    }