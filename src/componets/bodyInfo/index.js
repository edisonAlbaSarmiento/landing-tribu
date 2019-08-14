/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { 
  Container,
  TextTitle,
  ContentTitle,
  IconImageReact,
  Line,
  TextInfo
} from './style';

function BodyInfo({
  infoActive,
  openInfo
}) {
  return (
    <div style={{ backgroundColor:'#5555f8'}}>
        {!infoActive &&(
          <div>
            <IconImageReact onClick={openInfo}/>
           </div>
        )}
        {infoActive ?
        <Container>
          <ContentTitle>
            <IconImageReact/>
            <TextTitle>
                React js
            </TextTitle>
            <Line/>
            <TextInfo>
              React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.
            </TextInfo>
          </ContentTitle>
          <ContentTitle>
            <IconImageReact/>
            <TextTitle>
                React native
            </TextTitle>
              <div>
                <Line/>
                <TextInfo>
                  React Native es un marco de aplicaciones móviles de código abierto creado por Facebook. Se utiliza para desarrollar aplicaciones para Android, iOS, Web y UWP permitiendo a los desarrolladores usar React junto con las capacidades de la plataforma nativa.
                </TextInfo>
              </div>
          </ContentTitle>
        </Container>
        : ''}
    </div>
  );
}


export default BodyInfo;
