
import { Row, Container, Col} from 'react-bootstrap';
import { FooterStyle, FooterLogoStyle,FooterTextStyle, FooterIconStyle, FooterCopyrigthStyle, FooterLinkStyle } from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.svg';
import { SocialMediaIcon } from '../SocialMediaIcon';

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
    <Col>  <SocialMediaIcon SocialMediaIconImg="Teste" SocialMediaIconText2='fdgd' SocialMediaIconText1='dffdsfd'/> </Col> 
    <Col>  Contact us at unreal@outlook.com Have a question? 310-437-2766</Col>
    <Col>1 of 1</Col>
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
