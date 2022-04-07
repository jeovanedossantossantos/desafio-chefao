import { Container, Col } from "react-bootstrap";
import {
  SocialMediaIconStyle,
  FooterStyle,
  FooterCopyrigthStyle,
  FooterLinkStyle,
  FooterLink,
  FooterLine,
} from "./styles";
import LogoImage from "../../assets/images/VectorlogoCorreto.webp";
import { SocialMediaIcon } from "../SocialMediaIcon";
import LinkIcon from "../../assets/images/linkedin.png";
import InstIcon from "../../assets/images/instagram.png";
import LockIcon from "../../assets/images/lock.png";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div>
      <FooterStyle style={{}}>
        <Container style={{ marginTop: "50px", maxWidth: "95%" }}>
          <FooterLink style={{}}>
            <Col style={{ maxWidth: "8vh" }}>
              <img src={LogoImage} width="45.5px" alt=""></img>
            </Col>

            <FooterLinkStyle style={{ width: 750, marginTop: "17px" }}>
              <Col style={{ maxWidth: "430px" }}>
                {" "}
                © Coffee Experience Ltda. Todos os Direitos Reservados 2022{" "}
              </Col>
              <Col style={{ maxWidth: "2vh", marginLeft: 0 }}> |</Col>
              <Col style={{ maxWidth: "170px", marginRight: 5 }}>
                Politica de Privacidade
              </Col>
              <Col style={{ maxWidth: "3vh" }}>
                <Link to="/login">
                  <img src={LockIcon} alt="" />
                </Link>
              </Col>
            </FooterLinkStyle>

            <Col style={{ maxHeight: "60px" }}>
              <SocialMediaIconStyle style={{ justifyContent: "end", float: "right" }}>

                <div style={{ margin: 5 }}>
                  <SocialMediaIcon SocialMediaIconImg={InstIcon} />
                </div>
                <div style={{ margin: 5 }}>
                  <SocialMediaIcon SocialMediaIconImg={LinkIcon} />
                </div>
              </SocialMediaIconStyle>

<<<<<<< HEAD
              <FooterLinkStyle style={{ maxWidth: 230, float: "right", marginTop: 15 }}>
                <FooterCopyrigthStyle style={{}}>
                  Av. República do Libano, 235{" "}
                </FooterCopyrigthStyle>
=======
              <FooterLinkStyle  style={{ maxWidth:360, float:'right', marginTop: 15}}>
                <FooterCopyrigthStyle style={{}} >Av. República do Libano, 235  </FooterCopyrigthStyle>
>>>>>>> 8a4ba4710b160c871991c46cbf1555cdf5b7f56f
                <FooterLine style={{ marginLeft: 20 }}> | </FooterLine>
              </FooterLinkStyle>
            </Col>
          </FooterLink>
        </Container>
      </FooterStyle>
    </div>
  );
};
