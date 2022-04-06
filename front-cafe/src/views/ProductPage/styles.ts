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
export const BackgroundFromTheContentBackground = styled.div`

background: #FAF4F0;
height: 75vh;

@media only screen and (min-height: 900px) {
    height: 77vh;
    }
    @media only screen and (max-height: 767px) {
    height: 180vh;
    }
    @media only screen and (max-height: 575px) {
        height: 250vh;
    }
    @media only screen and (max-height: 480px) {
        height: 240vh;
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
    img {
        @media only screen and (max-width: 991px) {

    width: 400px !important;
    margin-left: -100px !important;
        }
        @media only screen and (max-width: 575px) {
            width: 500px !important;
            margin-left: 0vw !important;
            margin-top: 0vw !important;
    }
    @media only screen and (max-width: 512px) {
        width: 450px !important;
    }
    @media only screen and (max-width: 480px) {
        margin-left: 8vw !important;
        width: 88vw !important;
    }
    @media only screen and (max-width: 420px) {
        margin-left: 6vw !important;
    }
    @media only screen and (max-width: 320px) {
        margin-left: 6vw !important;

    }
    }
    @media only screen and (max-width: 1920px) {
        background-size: cover;
        margin-top:60px;
    }
`
export const ColumnMargin = styled.div`

    @media only screen and (max-width: 991px) {
        margin-left: 8vw
    }
    @media only screen and (max-width: 768px) {
        margin-left: 9vw
    }
    @media only screen and (max-width: 767px) {
        margin-left: 0.1vw
    }

`;
export const RowMargin = styled.div`

    @media only screen and (max-width: 767px) {
        margin-top: 20vw
    }

`;

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
font-family: 'Poppins-SemiBold';
font-size: 32px;
line-height: 48px;
letter-spacing: 0.2em;
margin-top: 5.4vw;
text-transform: uppercase;
/* padding-top: 115px; */
color: #301F1B;


`;

export const Paragrafo = styled.p`
/* background: red; */
/* position: absolute; */
max-width: 518px;
max-height: 105px;
margin-top: 20px;
margin-bottom: 55px;

/* padding-top: 167px; */
font-family: 'Poppins-Regular';
font-size: 14px;

/* or 30px */

letter-spacing: 0.1em;

color: #574C49;
@media only screen and (max-width: 575px) {
            width: 78vw ;
            margin-bottom: -10vw;
    }
    @media only screen and (max-width: 480px) {
        margin-bottom: -2vw;
    }
    @media only screen and (max-width: 420px) {
        margin-bottom: 30vw;
    }
    @media only screen and (max-width: 320px) {
        margin-bottom: 50vw;
    }

`;

export const TituloPropCafe = styled.p`
/* background: red; */
/* position: absolute; */
width: 318px;
margin-top: 20px;
margin-bottom: 0px;
text-transform: uppercase;
/* padding-top: 167px; */
font-family: 'Poppins-SemiBold';
font-size: 12px;
/* or 30px */
letter-spacing: 0.1em;
color: #CD7254;
@media only screen and (max-width: 320px) {
        width: 50vw;
    }
`;

export const ContextoPropCafe = styled.p`
/* background: red; */
 
width: 300px;
height: 36px;

/* padding-top: 167px; */
font-family: 'Poppins-SemiBold';
font-weight: 600;
font-size: 20px;
/* or 30px */

letter-spacing: 0.1em;

color: #281813;
@media only screen and (max-width: 991px) {
    /* font-size: 1.5625vw; */

    }
    
    @media only screen and (max-width: 320px) {
        width: 50vw;
    }
`;