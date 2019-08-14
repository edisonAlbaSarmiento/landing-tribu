import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 8px;
    display: flex;
    justify-content: center;
    
`
export const TextTitle = styled.h1`
    font-size: 23px;
    text-transform: uppercase;
    color: white;
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
    color: white;
`
export const TextInfo = styled.p`
    color: white;
`

export const ContentTitle = styled.div`
    padding: 0px 60px
`

export const ContentImage = styled.div`
    background-color: #edf1f4;
    width: 505px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
`
export const IconImageReact = styled.div`
    background-size: 140px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png);
    background-repeat: no-repeat;
    padding: 20px;
    background-origin: content-box;
    height: 110px;
    background-position: center;
    width: 95%;
`
export const Line = styled.hr`
    width: 70px;
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