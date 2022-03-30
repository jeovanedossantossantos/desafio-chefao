
import { Row, Container, Col} from 'react-bootstrap';
import { FooterStyle, FooterLogoStyle,FooterTextStyle, FooterIconStyle, FooterCopyrigthStyle, FooterLinkStyle } from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.svg';
import { SocialMediaIcon } from '../SocialMediaIcon';
import CallIcon from '../../assets/images/ButtonCallIcon.svg';
import EmailIcon from '../../assets/images/ButtonEmailIcon.svg';
import FbIcon from '../../assets/images/Mini-ButtonFbIcon.svg';
import YtIcon from '../../assets/images/Mini-ButtonYtIcon.svg';
import ZapIcon from '../../assets/images/Mini-ButtonIconZap.svg';

export const Footer: React.FC = () => {


  return (
<div>
  
<FooterStyle>
<Container>
  <Row>
    <Col><FooterLogoStyle><img src={LogoImage} width='45.5px' alt=''></img></FooterLogoStyle></Col>
  </Row>
  <Row>
    <Col><FooterTextStyle>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</FooterTextStyle></Col>
  </Row>
  <Row>
    <Col>  <SocialMediaIcon SocialMediaIconImg={CallIcon} SocialMediaIconText1='Have a question?' SocialMediaIconText2='310-437-2766' /> </Col> 
    <Col>  <SocialMediaIcon SocialMediaIconImg={CallIcon} SocialMediaIconText1='Have a question?' SocialMediaIconText2='310-437-2766' />  </Col>
    <Col></Col>
    <Col></Col>
    <Col><SocialMediaIcon SocialMediaIconImg={CallIcon}/> </Col>
    <Col><SocialMediaIcon SocialMediaIconImg={CallIcon}/> </Col>
    <Col><SocialMediaIcon SocialMediaIconImg={CallIcon}/> </Col>
  </Row>
  <FooterLinkStyle>
  <Row>
    <Col>Nossos Cafés</Col>
    <Col>Sobre nós</Col>
    <Col>Contacts</Col>
    <Col>Privacy policy</Col>
    <Col>Terms of Use</Col>
    <Col><FooterCopyrigthStyle>© 2000-2022, All Rights Reserved</FooterCopyrigthStyle></Col>
  </Row>
  </FooterLinkStyle>
</Container>
</FooterStyle>

</div>
  )
}
