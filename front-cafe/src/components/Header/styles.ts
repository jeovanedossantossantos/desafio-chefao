
import styled from 'styled-components'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import LogoImage from '../../assets/images/VectorlogoCorreto.svg';

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

  font-family: 'Poppins';
  font-size:19px;
  color:#EFEFEF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-left:2.5vh;
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
background-size: 59px 59px;
width: 59px;
height: 59px;
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
justify-content:left;
}

@media only screen and (max-width: 991px) {
    display: flex;
    justify-content:left;
    margin-left:-18vh;

    }
`;

