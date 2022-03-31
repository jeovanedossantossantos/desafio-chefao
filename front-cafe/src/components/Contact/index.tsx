import { Container, Row, Col } from 'react-bootstrap';
import {ContactTitleStyle, ContactContainer, ContactLine, ContentContact, Contentv2Contact, SpaceContact, SpaceContactFinans} from './styles';



export const Contact: React.FC = () => {
  
  return ( <div>
      <ContactContainer>
      <Container fluid >
  <Row xs="auto">
   
<ContactTitleStyle>Contato<ContactLine>
    </ContactLine></ContactTitleStyle>
  </Row>
 
    <Col>
           <ContentContact>financeiro</ContentContact>
           <Contentv2Contact>nome sobrenome</Contentv2Contact>
           <Contentv2Contact>+51 9 0000 0000</Contentv2Contact>
           <Contentv2Contact>nome@email.com</Contentv2Contact>
    </Col>
  

  <Col>         
            <ContentContact><SpaceContactFinans>pessoas</SpaceContactFinans></ContentContact>
           <Contentv2Contact><SpaceContact>nome sobrenome</SpaceContact></Contentv2Contact>
           <Contentv2Contact><SpaceContact>+51 9 0000 0000</SpaceContact></Contentv2Contact>
           <Contentv2Contact><SpaceContact>nome@email.com</SpaceContact></Contentv2Contact>


    </Col>
   
  </Container>
  </ContactContainer>



    </div>
    )
}
