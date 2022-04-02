import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Paragrafo, SectionAbout, HomeAboutBackgroundImage, Titulo, ContainerMain } from './styles';

export const About: React.FC = () => {
  return (
    <ContainerMain id='about'>
      {/* <Row> */}
        <SectionAbout>
          {/* <Col xs={6} style={{background:"red"}}>
            <Titulo>
              QUEM SOMOS
            </Titulo>
          </Col> */}
          <Col
            xs={6}
            className="col-sectionAbout"
          
          >
            <Titulo>
              QUEM SOMOS
            </Titulo>
            <Paragrafo>
              Desde 2010 queremos facilitar que novos sabores da bebida mais brasileira de todas, nosso amado café, chegue no maior número de pessoas!
              Com essa missão nós queremos alcaçar o maior número de pessoas que ainda tomam o café amargo e de pouca qualidade encontrado no mercado.
            </Paragrafo>



          </Col >
          <Col  xs={5} className="col-sectionAbout sm" style={{}}>
            <HomeAboutBackgroundImage />
          </Col>


        </SectionAbout>

      {/* </Row> */}
    </ContainerMain>

  );

}



