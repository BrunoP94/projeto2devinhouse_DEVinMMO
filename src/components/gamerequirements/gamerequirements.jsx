import React from "react";
import { SystemRequirmentsBox, ReqEncapsulation, ListTitles, ListInfo } from "./gamerequirements.style";


export function GameRequirements( props ) {  

      return (

        <SystemRequirmentsBox>
          <h3>Requisitos de Sistema</h3>
          <ReqEncapsulation>
            <ul>
              <ListTitles>Graficos</ListTitles>
              <ListTitles>Memória</ListTitles>
              <ListTitles>Sistema Operacional</ListTitles>
              <ListTitles>Processador</ListTitles>
              <ListTitles>Espaço em Disco</ListTitles>
            </ul>
            <ul>
              <ListInfo>{props.requirements.graphics}</ListInfo>
              <ListInfo>{props.requirements.memory}</ListInfo>
              <ListInfo>{props.requirements.os}</ListInfo>
              <ListInfo>{props.requirements.processor}</ListInfo>
              <ListInfo>{props.requirements.storage}</ListInfo>
            </ul>
          </ReqEncapsulation>
        </SystemRequirmentsBox>

      );
    }