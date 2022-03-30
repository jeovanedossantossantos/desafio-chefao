import styled from "styled-components"
import homeHeaderBackgroundImage from '../../assets/images/homePageHeaderBackground.png'
import sectionAboutImage from '../../assets/images/sectionAbout.svg'


export const HomeHeaderBackground = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;  
    background: url(${homeHeaderBackgroundImage}) ;    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
  
    @media only screen and (min-width: 1920px) {
        background-size: cover;

    }
`



export const BannerText = styled.div`
color: #EFEFEF;
margin-top: 8.6%;
text-align: center;

`

export const BannerTitle = styled.div`
font-size: 4.444444444444445vw;
font-weight: 300;
letter-spacing: 0.44em;
display: flex;
justify-content: center;
font-family: 'Poppins-Light';
`

export const BannerIcon = styled.div`
color: white;
display: flex;
justify-content: center;
margin-top: 1%;
`
export const BannerDesc = styled.div`
color: white;
font-size: 0.985vw;
display: flex;
justify-content: center;
margin-top: 2%;
margin-bottom: 4%;
letter-spacing: 0.1em;
font-family: 'Poppins-Medium';
color: #FFFFFF;
`
export const BannerIconSpace = styled.div`
padding-left: 0.7%;
`
export const ButtonBottomMargin = styled.div`
padding-bottom: 15vh;
`

export const Video = styled.video`

 position: fixed;
  right: 0;
  bottom: 0;
  width: auto;
  /* max-width:100%; */
  /* min-width: 100%; */
  
  height: auto;
  
  background-cover:cover;
  /* transform: rotate(90deg);
 -ms-transform: rotate(90deg);
 -webkit-transform: rotate(90deg); */
  source{
     /* height: 100vh; */
  
  }
    
`

export const HomeAboutBackground = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100%;  
    justify-content: space-between;
    align-items: flex-start;
    height: 507px;
    background: url(${sectionAboutImage}) ;    
    background-repeat: no-repeat;
    background-size: contain;
    @media only screen and (min-width: 1920px) {
        background-size: cover;
        
    }
`



