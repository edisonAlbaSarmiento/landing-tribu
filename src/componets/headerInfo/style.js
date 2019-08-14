import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #ecf0f4;
    padding: 8px;
    display: flex;
    justify-content: center;
    text-align: initial;
    
`
export const TextTitle = styled.h1`
    font-size: 36px;
    text-transform: uppercase;
`
export const IconImage = styled.div`
    height: 320px;
    background-image: url(https://imaginamos.com/wp-content/uploads/2017/09/HEADERMC-510x340.png);
    background-repeat: no-repeat;
    padding: 20px;
    background-origin: content-box;
`
export const TextSubTitle = styled.p`
    width: 551px;
`

export const ContentTitle = styled.div`
    padding: 87px 60px
`

export const ContentImage = styled.div`
    background-color: #edf1f4;
    width: 505px;
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