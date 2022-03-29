import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { StyledNav, CenterWrapperColorizer, WrapBannerText, ContainerMain} from './styles'

export const HeaderRoot: React.FC = () => {
  const push = useNavigate()
  const sair = ()=>{
    localStorage.removeItem('@cafeToken');
    push("/")
}
  return (
    
    <ContainerMain>
      <CenterWrapperColorizer className="sm">
        <Navbar bg="transparent" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
           

            <Navbar >
              <Nav >
                <Nav.Link href="/formulario"><StyledNav>Formulario</StyledNav></Nav.Link>
                <Nav.Link href="/lista"><StyledNav>Lista</StyledNav></Nav.Link>
                <Nav.Link href="#link"><StyledNav>Assinatura</StyledNav></Nav.Link>
                <Nav.Link href="/login"><StyledNav>Login</StyledNav></Nav.Link>
                <NavDropdown title="Login" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/login"><StyledNav>Login</StyledNav></NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>sair()}>Sair</NavDropdown.Item>
                  <NavDropdown.Divider />
                 
                </NavDropdown>
               
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
              <Offcanvas.Title id="offcanvasNavbarLabel">Cafe</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/formulario"><StyledNav>Formulario</StyledNav></Nav.Link>
                <Nav.Link href="/lista"><StyledNav>Lista</StyledNav></Nav.Link>
                <Nav.Link href="#link"><StyledNav>Assinatura</StyledNav></Nav.Link>
                <Nav.Link href="/login"><StyledNav>Login</StyledNav></Nav.Link>
                <NavDropdown title="Login" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>sair()}>Sair</NavDropdown.Item>
                  <NavDropdown.Divider />
                 
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </ContainerMain>
  )

}
