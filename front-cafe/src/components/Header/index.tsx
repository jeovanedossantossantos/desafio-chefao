import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import {
  StyledNav,
  CenterWrapperColorizer,
  ContainerMain,
  Logo,
  LogoMobile,
  StyledNavMobile,
  MobileMenuIconFigma,
} from "./styles";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header: React.FC = () => {

  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>

      <ContainerMain>
        <CenterWrapperColorizer className="sm">
          <Navbar bg="transparent" expand="lg" variant="dark">
            <Container>
              <Navbar>
                <Nav>
                  <StyledNav>
                    <HashLink smooth to="/#about">
                      Sobre
                    </HashLink>
                  </StyledNav>
                  <StyledNav>
                    <Link to="/searchpage">Nossos Cafés</Link>
                  </StyledNav>
                  <StyledNav>
                    <Link to="/contact">Contato</Link>
                  </StyledNav>
                </Nav>
              </Navbar>
            </Container>
          </Navbar>
        </CenterWrapperColorizer>

        <Navbar bg="transparent" expand={false} className="mb" variant="dark">
          <Container fluid>
            <Link to="/">
              <LogoMobile />
            </Link>
            <MobileMenuIconFigma
              style={{
                marginLeft: "80.3vw",
                marginTop: "7.5vw",
                borderColor: "transparent",
                pointerEvents: "none",
              }}
            />
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              style={{
                marginLeft: "78vw",
                marginTop: "5vw",
                borderColor: "transparent",
                opacity: "0%",
                marginRight: "12vw",
              }}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              style={{ background: "#131313", width: "299px" }}
            >
              <Offcanvas.Header
                closeButton
                style={{
                  filter: "invert(1)",
                  marginRight: "76px",
                  marginTop: "15px",
                  transform: "scale(1.4)",
                }}
              >
                <Offcanvas.Title
                  id="offcanvasNavbarLabel"
                  style={{ filter: "invert(1)" }}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <StyledNavMobile>
                      <HashLink smooth to="/#about">
                        Sobre
                      </HashLink>
                    </StyledNavMobile>
                  </Nav.Link>
                  <Nav.Link>
                    <StyledNavMobile>
                      <Link to="/searchpage">Nossos Cafés</Link>
                    </StyledNavMobile>
                  </Nav.Link>
                  <Nav.Link>
                    <StyledNavMobile>
                      <Link to="/contact">Contato</Link>
                    </StyledNavMobile>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </ContainerMain>
    </div>
  );
};
