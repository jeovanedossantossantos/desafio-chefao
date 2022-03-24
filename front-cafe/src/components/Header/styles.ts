import styled from 'styled-components'
import {Navbar, Container, Nav} from 'react-bootstrap';


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
    margin-left:0;
    }
`;

export const StyledNavBar = styled(Navbar)`
  color: white !important;
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