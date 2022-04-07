
import { Row, Container, Col } from 'react-bootstrap';
import { SocialMediaIconStyle, FooterStyle, FooterLogoStyle, FooterTextStyle, FooterCopyrigthStyle, FooterLinkStyle, FooterLink, FooterLine } from './styles'
import LogoImage from '../../assets/images/VectorlogoCorreto.webp';
import { SocialMediaIcon } from '../SocialMediaIcon';
import LinkIcon from '../../assets/images/linkedin.png';
import InstIcon from '../../assets/images/instagram.png';
import LockIcon from '../../assets/images/lock.png';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {


  return (
    <div>

      <FooterStyle style={{}}>
        <Container style={{ marginTop: '50px', maxWidth: '95%' }}>

          <FooterLink style={{}} >
            <Col style={{ maxWidth: '8vh' }}><img src={LogoImage} width='45.5px' alt=''></img></Col>

            <FooterLinkStyle style={{ width: 750, marginTop: '17px' }} >
              {/* <Row xs="auto"> */}

              <Col style={{ maxWidth: '430px' }} > © Coffee Experience Ltda. Todos os Direitos Reservados 2022 </Col>
              <Col style={{ maxWidth: '2vh', marginLeft: 0 }}> |</Col>
              <Col style={{ maxWidth: '170px', marginRight: 5 }}>Politica de Privacidade</Col>
              <Col style={{ maxWidth: '3vh' }}><Link to='/login'><img src={LockIcon} alt='' /></Link></Col>




              {/* </Row> */}
            </FooterLinkStyle>

            <Col style={{ maxHeight: '60px' }}>
              <SocialMediaIconStyle style={{ justifyContent: 'end', float: 'right' }} >

                <div style={{ margin: 5 }}>
                  <SocialMediaIcon SocialMediaIconImg={InstIcon} />
                </div>
                <div style={{ margin: 5 }}>
                  <SocialMediaIcon SocialMediaIconImg={LinkIcon} />
                </div>

              </SocialMediaIconStyle>

              <FooterLinkStyle style={{ maxWidth: 230, float: 'right', marginTop: 15 }}>
                <FooterCopyrigthStyle style={{}} >Av. República do Libano, 235  </FooterCopyrigthStyle>
                <FooterLine style={{ marginLeft: 20 }}> | </FooterLine>
              </FooterLinkStyle>



            </Col>


          </FooterLink>
        </Container>
      </FooterStyle>


      {/*  <Row xs="auto">
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
  </Row> */}
    </div>

  )
}
