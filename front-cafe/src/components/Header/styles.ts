import styled from 'styled-components'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';

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
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-left:4vh;
  margin-top:6vh;
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

export const MobileMenuCloseBtn = styled(Offcanvas)`


`;
