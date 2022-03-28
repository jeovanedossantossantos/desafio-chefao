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

