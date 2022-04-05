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


      <Carousel variant="dark">
        {
          data.map(e => {
            return (
              <Carousel.Item>
                <Row style={{ justifyContent: "center", alignItems: "center", width: "100%", maxWidth: 1500, margin: "auto" }}>
                  <Col className="sumir" xs={3} style={{ margin: 10, justifyContent: "right" }}>
                    <h4>NOTAS</h4>
                    <h3>{e?.nota}</h3>
                    <h4>ALTITUDE</h4>
                    <h3>{e?.regiao.altitude}</h3>
                    <h4>TORRA</h4>
                    <h3>{e?.torra.nome}</h3>

                  </Col>
                  <Col className="w-400" xs={5} style={{ margin: 10 }}>
                    {/* <Carousel> */}
                      {/* <Carousel.Item> */}
                        <img style={{ minHeight: "200px", maxHeight: "620px" }}
                          className="d-block w-100 h-100"
                          src={e?.foto_cafe ? e?.foto_cafe : "https://alavoura.com.br/wp-content/uploads/2020/06/tim-e1592429928966.jpeg"}
                          alt="First slide"
                        />
                      {/* </Carousel.Item>
                      <Carousel.Item>
                        <img
                          style={{ minHeight: "200px", maxHeight: "400px" }}
                          className="d-block w-100 h-100"
                          src={vetor?.foto_cafe_1 ? vetor?.foto_cafe_1 : "https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                          alt="Second slide"
                        />
                      </Carousel.Item> */}
                      {/* <Carousel.Item>
                        <img
                          style={{ minHeight: "200px", maxHeight: "400px" }}
                          className="d-block w-100 h-100"
                          src={vetor?.foto_cafe_2 ? vetor.foto_cafe_2 : "https://alavoura.com.br/wp-content/uploads/2020/06/article.png"}
                          alt="Third slide"
                        />
                      </Carousel.Item> */}
                    {/* </Carousel> */}


                  </Col>
                  <Col className="sumir" xs={3} style={{ margin: 10 }}>
                    <h2>{e?.nome}</h2>
                    <p>{e?.descricao}</p>
                    <h4>CORPO</h4>
                    <h3>{e?.corpo.nome}</h3>
                    <h4>VARAIEDADE</h4>
                    <h3>{e?.variedade.nome}</h3>
                    <h4>ACIDEZ</h4>
                    <h3>{e?.acidez.nome}</h3>
                  </Col>
                </Row>
              </Carousel.Item>
            )
          })
        }

      </Carousel>
    </SliderContent>


  );
}