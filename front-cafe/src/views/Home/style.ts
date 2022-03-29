import styled from "styled-components"
import homeHeaderBackgroundImage from '../../assets/images/homePageHeaderBackground.png'


export const HomeHeaderBackground = styled.div`
position: absolute;
    width: 100%;
    height: 931px;
    background: url(${homeHeaderBackgroundImage}) ;    
    background-repeat: no-repeat;
    background-size: contain;
    @media only screen and (min-width: 1920px) {
        background-size: cover;
    }
`
export const BannerText = styled.div`
color: #EFEFEF;
margin-top: 10%;
text-align: center;
`

export const BannerTitle = styled.div`
font-size: 4.5vw;
font-weight: 300;
letter-spacing: 0.44em;
display: flex;
justify-content: center;
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
`
export const BannerIconSpace = styled.div`
padding-left: 0.7%;

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

