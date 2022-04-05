import styled from 'styled-components'
import {Container, Nav} from 'react-bootstrap';
import homeAboutBackgroundImage from '../../assets/images/homePageAboutBackground.png'
import sectionAboutImage from '../../assets/images/sectionAbout.webp'

export const ContainerMain = styled.div`
  justify-content:center;
  align-items:center;
  flex-direction: row;
  margin: auto;

  .mb{
    display:none;
  }
  @media (max-width:900px){
    .mb{
    display:block;
    }
    .sm{
      display:none;
    }
  }

`;

export const StyledNav = styled(Nav)`

  font-family: 'Poppins';
  font-size:14px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-left:4vh;
  margin-top:6vh;
  @media only screen and (max-width: 991px) {
    margin-left:0;
    margin-top:0;
    font-size:10px;
    }

    
`;


export const CenterWrapperColorizer = styled(Container)`
display: flex;
justify-content:center;
padding-left:19vh;
@media only screen and (max-width: 991px) {
    display: flex;
    justify-content:left;
    margin-left:-18vh;

    }
`;


export const Titulo = styled.h1`
  /* position: absolute; */
/* height: 51px; */
/* left: 216px; */

font-family: 'Poppins-Light';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 48px;
letter-spacing: 0.3em;
text-align: justify;
margin: auto;
padding-bottom: 15px;
color: #C0836E;
width: 100%;
max-width:500px ;

`;

export const Paragrafo = styled.p`
/* background: red; */
/* position: absolute; */
width: 100%;
max-width:500px ;
margin: 0 auto;
/* max-width:455px;
min-width: 200px; */
/* height: 300px; */
left: 216px;
/* padding-top: 167px; */
font-family: 'Poppins-Regular';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 149%;
/* or 30px */

letter-spacing: 0.1em;

color: #FFFFFF;
@media only screen and (max-width: 1024px) {
  font-size: 16px;
    }
    
`;


export const SectionAbout = styled.main`
 
   /* z-index: 2; */
  background-color: #2941ab;
  /* height: 600px; */
  width: 100%;
  color: #1ed760;
  display: flex; 
  flex-direction: row;
justify-content: center;
align-items: center;
  
  /* flex-direction: column; */
  /* gap: 15px; */
  background: url(${homeAboutBackgroundImage }) ; 
  /* background-position: 46% 4%;
  background-size: 175%;  */
  @media only screen and (max-width: 991px) {
      height:45vw;

    }
  
  .col-sectionAbout{
     /* margin:10px; */
     @media(max-width:900px){
       width:90%;
       max-width:400px;
       min-width: 200px;
       margin:10px;
     }
     
     
      
    }
   
`;

export const HomeAboutBackgroundImage = styled.section`
    /* margin-left: 120vh; */
    /* display:flex; */
    /* flex-direction: column; */
    width: 100%;
    /* max-width:455px; */
    min-width:200px;
    height: 575px;
   
    background-image: url(${sectionAboutImage});
    background-repeat: no-repeat;
    /* background: red; */
    
    @media (max-width:1024px){
      margin-left:90px;
    }
    @media (max-width:900px){
      display: none;
    }


`;







