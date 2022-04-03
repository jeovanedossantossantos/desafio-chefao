
import { Row, Container, Col } from 'react-bootstrap';
import { SocialMediaIconStyle, FooterStyle, FooterLogoStyle, FooterTextStyle, FooterCopyrigthStyle, FooterLinkStyle, FooterLink } from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.webp';
import { SocialMediaIcon } from '../SocialMediaIcon';
import CallIcon from '../../assets/images/ButtonCallIcon.svg';
import EmailIcon from '../../assets/images/ButtonEmailIcon.svg';
import FbIcon from '../../assets/images/Mini_Button.png';
import YtIcon from '../../assets/images/Mini_Button_you.png';
import ZapIcon from '../../assets/images/Mini_Button_zap.png';

export const Footer: React.FC = () => {


  return (
    <div>

      <FooterStyle>
        <Container fluid className="m-5" >
          <Row xs="auto">
            <Col><FooterLogoStyle><img src={LogoImage} width='45.5px' alt=''></img></FooterLogoStyle></Col>
          </Row>
          <Row>
            <Col>
              <FooterTextStyle>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </FooterTextStyle>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', flexWrap: 'wrap' }} >
              <div style={{ margin: 10 }}>
                <SocialMediaIcon SocialMediaIconImg={CallIcon} SocialMediaIconText1='Have a question?' SocialMediaIconText2='310-437-2766' />

              </div >
              <div style={{ margin: 10 }}>
                <SocialMediaIcon SocialMediaIconImg={EmailIcon} SocialMediaIconText1='Contact us at' SocialMediaIconText2='unreal@outlook.com' />

              </div>
            </Col>
            <Col md={{ span: 3 }} >
              <SocialMediaIconStyle style={{ float: 'right' }}>

                <div style={{ margin:5}}>
                  <SocialMediaIcon SocialMediaIconImg={FbIcon} />
                </div>
                <div style={{ margin:5}}>
                  <SocialMediaIcon SocialMediaIconImg={YtIcon} />
                </div>

                <div style={{ margin:5}}>
                  <SocialMediaIcon SocialMediaIconImg={ZapIcon} />
                </div>

              </SocialMediaIconStyle>
            </Col>
          </Row>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
            <FooterLink style={{maxWidth:600,width:"100%",minWidth:200}}>
              <FooterLinkStyle style={{maxWidth:600,width:"100%",minWidth:200}}>
                {/* <Row xs="auto"> */}
                <Col className="no-copy">Nossos Cafés</Col>
                <Col className="no-copy">Sobre nós</Col>
                <Col className="no-copy">Contacts</Col>
                <Col className="no-copy">Privacy policy</Col>
                <Col className="no-copy">Terms of Use</Col>

                {/* </Row> */}
              </FooterLinkStyle>

            </FooterLink>
            <FooterLink>
              <FooterLinkStyle style={{ float: 'right' }}>
                <FooterCopyrigthStyle >© 2000-2022, All Rights Reserved</FooterCopyrigthStyle>

              </FooterLinkStyle>
            </FooterLink>
          </div>
        </Container>
      </FooterStyle>

    </div>
  )
}
