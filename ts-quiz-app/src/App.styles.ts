import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/winter.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding:0 20px;
        diplay: flex;
        justify-contemt: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran' , sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >p{
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin:0;
    }

    h1{
        font-family: Fascinate Inline,
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        
    }
`