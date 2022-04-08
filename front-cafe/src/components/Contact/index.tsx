import { Container, Row, Col } from "react-bootstrap";
import {
  ContactTitleStyle,
  ContactContainer,
  ContactLine,
  ContentContact,
  Contentv2Contact,
  SpaceContact,
  SpaceContactFinans,
} from "./styles";

export const Contact: React.FC = () => {
  return (
    <Col>
      <ContactContainer style={{}}>
        <Container>
          <Row xs="auto">
            <ContactTitleStyle>
              Contato<ContactLine></ContactLine>
            </ContactTitleStyle>
          </Row>

          <Col>
            <ContentContact>financeiro</ContentContact>
            <Contentv2Contact>Cláudia Pinheiro</Contentv2Contact>
            <Contentv2Contact>+55 11 9 8156 5522</Contentv2Contact>
            <Contentv2Contact>claudiapinheiro@coffeexp.com</Contentv2Contact>
          </Col>

          <Col>
            <ContentContact>
              <SpaceContactFinans>pessoas</SpaceContactFinans>
            </ContentContact>
            <Contentv2Contact>
              <SpaceContact>Ayra Guerra</SpaceContact>
            </Contentv2Contact>
            <Contentv2Contact>
              <SpaceContact>+55 11 9 9544 6558</SpaceContact>
            </Contentv2Contact>
            <Contentv2Contact>
              <SpaceContact>ayraguerra@coffeexp.com</SpaceContact>
            </Contentv2Contact>
          </Col>
        </Container>
      </ContactContainer>
    </Col>
  );
};
