import styled from 'styled-components'
import { Container, Nav } from 'react-bootstrap';
import LogoImage from '../../assets/images/VectorlogoCorreto.webp';
import menuMobileIcon from '../../assets/images/menuMobileSemPs.svg';

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
  color:#EFEFEF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-left:1.2vw;
  margin-top:3.5vh;

  @media only screen and (max-width: 1024px) {
    font-size:12px;
    margin-left:3.2vw;
    }

  @media only screen and (max-width: 991px) {
    margin-left:2vh;
    margin-top:0;
    font-size:20px;
    }

    &:hover {
    transform: scale(1.02)
}
`;

export const StyledNavMobile = styled(Nav)`
  font-family: 'Poppins-Regular';
  font-size:28px;
  color:#EFEFEF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  margin-left:6.2vw;
  margin-bottom:6.2vw;

    &:hover {
    transform: scale(1.02)
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
    @media only screen and (max-width: 991px) 
    {
     display:none;
    }

`;
export const LogoMobile = styled.div`
  position: absolute;
  background-size: 42.5px 42.5px;
  width: 42.5px;
  height: 42.5px;
  background-image: url(${LogoImage});
  margin-top:4vh;
  margin-left:7.9%;
    @media only screen and (max-width: 991px) 
    {
      margin-top:-0.4vw;
      margin-left: 6.7%;
    }

    @media only screen and (max-width: 799px)
    {
      margin-top: 4.4vw;
      margin-left: 6.7%;
    }

    @media only screen and (max-width: 363px) 
    {
      margin-top: 5.4vw;
      margin-left: 4.7%;
    }
`;

export const CenterWrapperColorizer = styled(Container)`  
  display: flex;
  justify-content:right;
  margin-right: 4vh;
  img {
    display: flex;
  }
@media only screen and (max-width: 1024px)
 {
    font-size:12px;
    margin-left:-1.2vw;
    }
@media only screen and (max-width: 991px)
 {
    display: flex;
    justify-content:left;
    margin-left:-18vh;
    }
`;

export const MobileMenuIconFigma = styled.div`
  position: absolute;
  background-size: 32.5px 32.5px;
  width: 32.5px;
  height: 32.5px;
  background-image: url(${menuMobileIcon});
  border-color: 'transparent';

      &:hover
     {
      transform: scale(1.02)
    }

@media only screen and (max-width: 363px)
 {
    margin-top: 1.4px;
    margin-left: 6.7px;
    }
`;

