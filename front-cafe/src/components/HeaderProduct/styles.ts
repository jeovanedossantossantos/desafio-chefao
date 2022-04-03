
import styled from 'styled-components'
import {Container, Nav } from 'react-bootstrap';
import LogoImage from '../../assets/images/VectorLogoProduct.svg';


export const ContainerMain = styled.div`

  .mb{
    display:none;
  }
  @media (max-width:991px){
    .mb{
    display:block;
    }
    .sm{
      display:none;
    }
  }
  
  
  
  
`

export const StyledNav = styled(Nav)`

  font-family: 'Poppins-Bold';
  font-size:0.9722222222222222vw;
  color:#281813;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-left:1.2vw;
  margin-top:3.5vh;
  @media only screen and (max-width: 991px) {
    margin-left:2vh;
    margin-top:0;
    font-size:20px;
    }
`;

export const WrapBannerText = styled.div`


max-width: 70%;
margin: 0 auto;
display:flex;
align-items: center;
`;



export const Logo = styled.div`
position: absolute;
background-size: 42.5px 42.5px;
width: 42.5px;
height: 42.5px;
background-image: url(${LogoImage});
margin-top:4vh;
margin-left:7.9%;
    @media only screen and (max-width: 991px) {
display: none;
    }

`;

export const CenterWrapperColorizer = styled(Container)`
  
display: flex;
justify-content:right;
margin-right: 4vh;
img {
  display: flex;
}

@media only screen and (max-width: 991px) {
    display: flex;
    justify-content:left;
    margin-left:-18vh;

    }
`;


export const ProductLine = styled.div`
border: 1px solid #C4C4C4;
display: flex;
    flex-direction: column;
    max-width: 250vh;  
  
margin: 32px;
`;

