import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { StyledNav, CenterWrapperColorizer, WrapBannerText, ContainerMain, Logo} from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.svg';

export const Header: React.FC = () => {


  return (
<div>
          <Logo/>
    <ContainerMain>
      <CenterWrapperColorizer className="sm">
        <Navbar bg="transparent" expand="lg" variant="dark">
          <Container>

            <Navbar >
              <Nav>

              <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav.Link href="#home"><StyledNav>Sobre</StyledNav></Nav.Link>
                <Nav.Link href="#home"><StyledNav>Nossos Cafés</StyledNav></Nav.Link>
                <Nav.Link href="#link"><StyledNav>contato</StyledNav></Nav.Link>
                <Nav.Link><StyledNav>|</StyledNav></Nav.Link>
                {/* <Nav.Link href="/login"><StyledNav>Login</StyledNav></Nav.Link> */}
                <Nav.Link href="/login"><StyledNav>Clube de Assinatura</StyledNav></Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </CenterWrapperColorizer>


      <Navbar bg="transparent" expand={false} className="mb" variant="dark">
        <Container fluid >
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{background:"#2F1D19"}}
          >
            <Offcanvas.Header  closeButton style={{background:"#C0836E", opacity: '100%'}}>
            <Offcanvas.Title id="offcanvasNavbarLabel"><img src={LogoImage} alt='' /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link ><StyledNav>Nossos Cafés</StyledNav></Nav.Link>
                <Nav.Link ><StyledNav>Assinatura  </StyledNav></Nav.Link>
                <Nav.Link ><StyledNav>Sobre </StyledNav></Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Nav.Link href="/login">Login</Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </ContainerMain>
    </div>
  ) 

}
