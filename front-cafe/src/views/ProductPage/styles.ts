import styled from "styled-components"
import LogoImageProduct from '../../assets/images/MockupsCoffee1.svg';

export const ProductHeaderBackground = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;  
    height: 113px;
    background: #FAF4F0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    
    @media only screen and (min-width: 1920px) {
        background-size: cover;

    }
`

export const ContentBackground = styled.div`
    background: #FAF4F0;
    display: flex;
    flex-direction: column;
    max-width: 100%;  
    height: 100%;    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
   
 
    @media only screen and (min-width: 1920px) {
        background-size: cover;

    }
`

export const Logo = styled.div`
position: absolute;
background-size: 42.5px 42.5px;
width: 42.5px;
height: 42.5px;
background-image: url(${LogoImageProduct});
margin-top:4vh;
margin-left:7.9%;
    @media only screen and (max-width: 991px) {
display: none;
    }

`;

export const Titulo = styled.h1`
  /* position: absolute; */
/* height: 51px; */
/* left: 216px; */
font-family: 'Poppins';
font-size: 25px;
line-height: 48px;
letter-spacing: 0.2em;
margin: 60px 0px;
text-transform: uppercase;
/* padding-top: 115px; */
color: #301F1B;


`;

export const Paragrafo = styled.p`
/* background: red; */
/* position: absolute; */
width: 318px;
height: 105px;
margin-top: 30px;

/* padding-top: 167px; */
font-family: 'Poppins-Regular';
font-size: 14px;
line-height: 149%;
/* or 30px */

letter-spacing: 0.1em;

color: #574C49;
`;

export const TituloPropCafe = styled.p`
/* background: red; */
/* position: absolute; */
width: 318px;
margin-top: 20px;

/* padding-top: 167px; */
font-family: 'Poppins-Regular';
font-size: 14px;
/* or 30px */

letter-spacing: 0.1em;

color: #CD7254;
`;

export const ContextoPropCafe = styled.p`
/* background: red; */
 
width: 300px;
height: 36px;
left: 0px;
top: 18px;

/* padding-top: 167px; */
font-family: 'Poppins';
font-weight: 600;
font-size: 1.5625vw;
/* or 30px */

letter-spacing: 0.1em;

color: #281813;
`;