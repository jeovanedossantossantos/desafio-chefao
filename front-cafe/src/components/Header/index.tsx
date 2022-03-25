import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { StyledNav, CenterWrapperColorizer, WrapBannerText, ContainerMain, } from './styles'


export const Header: React.FC = () => {
  return (
    <ContainerMain>
      <CenterWrapperColorizer className="sm">
        <Navbar bg="transparent" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
           

            <Navbar >
              <Nav >
                <Nav.Link href="#home"><StyledNav>Sobre</StyledNav></Nav.Link>
                <Nav.Link href="#home"><StyledNav>Nossos Cafés</StyledNav></Nav.Link>
                <Nav.Link href="#link"><StyledNav>Assinatura</StyledNav></Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </CenterWrapperColorizer>


      <Navbar bg="transparent" expand={false} className="mb">
        <Container fluid >
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{background:"red"}}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </ContainerMain>
  )

}
