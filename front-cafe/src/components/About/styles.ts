import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";
import homeAboutBackgroundImage from "../../assets/images/homePageAboutBackground.png";
import sectionAboutImage from "../../assets/images/sectionAbout.webp";

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
  @media only screen and (max-width: 991px) 
  {
    margin-left:0;
    margin-top:0;
    font-size:10px;
    }    
`;

export const CenterWrapperColorizer = styled(Container)`
  display: flex;
  justify-content:center;
  padding-left:19vh;
  @media only screen and (max-width: 991px)
    {
      display: flex;
      justify-content:left;
      margin-left:-18vh;
      }
`;

export const Titulo = styled.h1`
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

@media only screen and (max-width: 480px) 
{
  margin-left:0;
  margin-top:22px;
  line-height: 38px;
  font-size:27px;
  width: 50px;
  letter-spacing: 0.3em;
    }
`;

export const Paragrafo = styled.p`
  width: 100%;
  max-width:500px ;
  margin: 0 auto;
  left: 216px;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 149%;
  letter-spacing: 0.1em;
  color: #FFFFFF;

@media only screen and (max-width: 1024px)
  {
  font-size: 16px;  
   }

@media only screen and (max-width: 570px) {
  margin-left:0;
  margin-top:0;
  font-size:13px;
 }

@media only screen and (max-width: 480px) 
  {
  margin-left:0;
  margin-bottom:30px;
  font-size:17px;
  max-width:300px ;
}  
`;

export const SectionAbout = styled.main`
  background-color: #2941ab;
  width: 100%;
  color: #1ed760;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  background: url(${homeAboutBackgroundImage}) ; 

  @media only screen and (max-width: 991px)
   {
    height:135vw;
    padding:10px;
    }
  
  .col-sectionAbout{
  @media(max-width:900px)
  {
    width:90%;
    max-width:400px;
    min-width: 200px;
    margin:10px;
     }
     
     
      
    }
   
`;

export const HomeAboutBackgroundImage = styled.section`
   width: 100%;
   min-width:200px;
   height: 575px;   
   background-image: url(${sectionAboutImage});
   background-repeat: no-repeat;
   
   @media (max-width:1024px)
   {
     margin-left:90px;
   }
   @media (max-width:900px)
   {
     display: none;
   }


`;
