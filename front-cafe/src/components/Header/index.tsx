import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { StyledNav, CenterWrapperColorizer, WrapBannerText, ContainerMain, Logo, LogoMobile, StyledNavMobile, MobileMenuIconFigma} from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.webp';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HomeAboutBackgroundImage } from '../About/styles';



export const Header: React.FC = () => {

  const push = useNavigate()

  return (  
<div >
<Link to ='/'><Logo/></Link>

    <ContainerMain>
      <CenterWrapperColorizer className="sm">
        <Navbar bg="transparent" expand="lg" variant="dark">
          <Container>
            <Navbar >
              <Nav>
             <StyledNav><HashLink smooth to='/#about'>Sobre</HashLink></StyledNav>
               <StyledNav><Link to ='/searchpage'>Nossos Cafés</Link></StyledNav>
                <StyledNav><Link to ='/contact'>Contato</Link></StyledNav>
                {/* <Nav.Link href="/login"><StyledNav>Login</StyledNav></Nav.Link> */}
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </CenterWrapperColorizer>


      <Navbar bg="transparent" expand={false} className="mb" variant='dark'  >
        <Container fluid >
        <Link to ='/'><LogoMobile/></Link>
        <MobileMenuIconFigma style={{marginLeft: "80.3vw",marginTop: "7.5vw", borderColor: 'transparent'}}/>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={{marginLeft: "78vw",marginTop: "5vw", borderColor: 'transparent', opacity: '100%' }}/>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{background:"#131313", width: '299px'}}
          >
            <Offcanvas.Header  closeButton style={{filter:"invert(1)", marginRight: "76px", marginTop: "15px", transform: 'scale(1.4)'}}>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{filter:"invert(1)"}}></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link ><StyledNavMobile><HashLink smooth to='/#about'>Sobre</HashLink></StyledNavMobile></Nav.Link>
                <Nav.Link ><StyledNavMobile><Link to ='/searchpage'>Nossos Cafés</Link></StyledNavMobile></Nav.Link>
                <Nav.Link ><StyledNavMobile><Link to ='/contact'>Contato</Link></StyledNavMobile></Nav.Link>

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
