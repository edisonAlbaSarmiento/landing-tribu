import React from 'react';
import { 
  Container,
  TextTitle,
  ContentTitleRight,
  ContentTitleLeft, 
  ContentImage, 
  TextSubTitle, 
  IconImage,
} from './style';

function HeaderInfo() {
  return (
    <Container>
        <ContentTitleRight>
            <TextTitle>
                Realizado en React js example
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
        </ContentTitleRight>
        <ContentImage>
            <IconImage>
            </IconImage>
        </ContentImage>
        <ContentTitleLeft>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
            <TextTitle>
                Realizado en React js
            </TextTitle>
            <TextSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextSubTitle>
        </ContentTitleLeft>
      
    </Container>
  );
}


export default HeaderInfo;
