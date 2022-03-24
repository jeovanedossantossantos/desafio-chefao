import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {StyledNav, CenterWrapperColorizer, WrapBannerText} from './styles'


export const Header: React.FC = () =>{
return (
    <CenterWrapperColorizer> 
<Navbar bg="transparent" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><StyledNav>Sobre</StyledNav></Nav.Link>
        <Nav.Link href="#home"><StyledNav>Nossos Cafés</StyledNav></Nav.Link>
        <Nav.Link href="#link"><StyledNav>Assinatura</StyledNav></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</CenterWrapperColorizer>
)

    }

