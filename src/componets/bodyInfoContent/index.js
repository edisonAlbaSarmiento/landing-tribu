import React from 'react';
import { 
  Container,
  TextTitle,
  ContentTitle, 
  ContentImage, 
  TextSubTitle, 
  Button,
  IconImage 
} from './style';

function HeaderInfo() {
  return (
    <Container>
        <ContentTitle>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextSubTitle>
            <Button>
              <a  href='https://es.reactjs.org/' style={{ textDecoration: 'none', color:' black'}}>
                Ir a la documentacion de React
              </a>
            </Button>
        </ContentTitle>
        <ContentImage>
            <IconImage>
            </IconImage>
        </ContentImage>
      
    </Container>
  );
}


export default HeaderInfo;
