import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SliderContent } from './styles'
import SliderImg from '../../assets/images/homePageAboutBackground.png';
import { api } from '../../serve';
import { DataProps } from "../../Interfaces/DataProps"
import { Col, Row } from 'react-bootstrap';


export const Slider: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([])
  const [vetor, setVetor] = useState<DataProps>()

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // let vetor = Array(<DataProps>)
  const res = async () => {
    try {
      const resposta = await api.get('/cafes')
      // const {regiao} = resposta.data
      setData(resposta.data)
      setVetor(resposta.data[getRandomInt(0, resposta.data.length)])
      // for(var i=0; resposta.data.length > 0; i++){
      //   vetor.push(resposta.data[i])
      // }
      console.log(getRandomInt(0, resposta.data.length))
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { res() }, [])

  return (

    <SliderContent>


      {/* <Carousel>
        <Carousel.Item> */}
          <Row style={{ justifyContent: "center",alignItems: "center",width: "100%", maxWidth: 1500, margin: "auto" }}>
            <Col className="sumir" xs={3} style={{ margin: 10, justifyContent: "right" }}>
              <h4>NOTAS</h4>
              <h3>{vetor?.nota}</h3>
              <h4>ALTITUDE</h4>
              <h3>{vetor?.regiao.altitude}</h3>
              <h4>TORRA</h4>
              <h3>{vetor?.torra.nome}</h3>

            </Col>
            <Col className="w-400" xs={5} style={{ margin: 10 }}>
              <Carousel>
                <Carousel.Item>
                  <img style={{ minHeight: "200px", maxHeight: "400px" }}
                    className="d-block w-100 h-100"
                    src={vetor?.foto_cafe ? vetor?.foto_cafe : "https://alavoura.com.br/wp-content/uploads/2020/06/tim-e1592429928966.jpeg"}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ minHeight: "200px", maxHeight: "400px" }}
                    className="d-block w-100 h-100"
                    src={vetor?.foto_cafe_1 ? vetor?.foto_cafe_1 : "https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ minHeight: "200px", maxHeight: "400px" }}
                    className="d-block w-100 h-100"
                    src={vetor?.foto_cafe_2 ? vetor.foto_cafe_2 : "https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>


            </Col>
            <Col className="sumir" xs={3} style={{ margin: 10 }}>
              <h2>{vetor?.nome}</h2>
              <p>{vetor?.descricao}</p>
              <h4>CORPO</h4>
              <h3>{vetor?.corpo.nome}</h3>
              <h4>VARAIEDADE</h4>
              <h3>{vetor?.variedade.nome}</h3>
              <h4>ACIDEZ</h4>
              <h3>{vetor?.acidez.nome}</h3>
            </Col>
          </Row>
        {/* </Carousel.Item>
      </Carousel> */}

      {/* {
        
            <Carousel style={{overflow: 'hidden'}}>
              <Carousel.Item >
                <img  style={{ minHeight:"200px", maxHeight:"400px"}}
                  className="d-block w-100 h-100"
                  src={vetor?.foto_cafe ?vetor?.foto_cafe :"https://alavoura.com.br/wp-content/uploads/2020/06/tim-e1592429928966.jpeg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ minHeight:"200px", maxHeight:"400px"}}
                  className="d-block w-100 h-100"
                  src={vetor?.foto_cafe_1 ? vetor?.foto_cafe_1:"https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                 style={{ minHeight:"200px", maxHeight:"400px"}}
                  className="d-block w-100 h-100"
                  src={vetor?.foto_cafe_2 ? vetor.foto_cafe_2 :"https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
       
      } */}

    </SliderContent>
  );
}