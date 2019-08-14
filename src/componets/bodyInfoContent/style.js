import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 275px;
    background-color: #ecf0f4;
    padding: 48px 0px;
    display: flex;
    justify-content: center;
    text-align: initial;
    
`
export const TextTitle = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
`
export const IconImage = styled.div`
    height: 138px;
    width: 240px;
    background-size: 210px;
    background-image: url(../../../cellphone.png);
    background-repeat: no-repeat;
    padding: 70px 0;
    background-origin: content-box;
    background-position: center;
`
export const TextSubTitle = styled.p`
    width: 551px;
`
export const Link = styled.a`
    text-decoration: none;
 color: black;
`
export const ContentTitleRight = styled.div`
    margin: 16px;
    text-align: end;
`
export const ContentTitleLeft = styled.div`
    margin: 16px;
    text-align: inherit;
`

export const ContentImage = styled.div`
    background-color: #edf1f4;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
`

export const Button = styled.button`
    width: 350px;
    height: 50px;
    font-size: 19px;
    border-radius: 50px 50px 50px 50px;
    &:hover {
        color: black;
        background-color: ${props =>
          props.primary ? 'white' : '#9f9d9e'};
      }

`