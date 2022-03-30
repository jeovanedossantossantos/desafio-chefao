import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Paragrafo, SectionAbout, HomeAboutBackgroundImage, Titulo} from './styles';

export const About: React.FC = () => {
  return (
    <div>
    <Row>
      <SectionAbout>
        <Col xs={6}><Titulo>
          QUEM SOMOS
        </Titulo></Col>
        <Col xs={6}>
          <Paragrafo>
            Desde 2010 queremos facilitar que novos sabores da bebida mais brasileira de todas, nosso amado café, chegue no maior número de pessoas!
            Com essa missão nós queremos alcaçar o maior número de pessoas que ainda tomam o café amargo e de pouca qualidade encontrado no mercado.
          </Paragrafo>
          <HomeAboutBackgroundImage >

          </HomeAboutBackgroundImage>


        </Col>

      </SectionAbout>

    </Row>
    </div>

  );

}



