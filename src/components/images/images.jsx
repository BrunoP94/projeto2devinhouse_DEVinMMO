import React from "react";
import { SmallImagesRow, SmallImage, ImageSlide, EachSlide} from './images.style'
import { Slide } from 'react-slideshow-image'; //adicionado  componente React Slideshow disponível com 'npm install react-slideshow-image -S' - Referência: https://react-slideshow.herokuapp.com/
import 'react-slideshow-image/dist/styles.css'

export function SlideShow( {SlideImages} ) {  

      return (
        <>
        <Slide easing="ease">
          {SlideImages.map((item, index)=>(
        <EachSlide key={index}>
          <ImageSlide src={item.image} key={item.id}/>
            </EachSlide>
            ))}         
            </Slide>
            <SmallImagesRow >
            {SlideImages.map((item, index)=>(
              <SmallImage key={index} src= {item.image} key={item.id}/>
            ))}         
            </SmallImagesRow>
            
        </>
      );
    }