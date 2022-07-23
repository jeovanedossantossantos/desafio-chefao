import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderContent } from "./styles";
import { api } from "../../serve";
import { DataProps } from "../../Interfaces/DataProps";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Slider: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [vetor, setVetor] = useState<DataProps>();

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const res = async () => {
    try {
      const resposta = await api.get("/cafes");
      setData(resposta.data);
      setVetor(resposta.data[getRandomInt(0, resposta.data.length)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <SliderContent>
      <Carousel variant="dark">
        {data.map((e) => {
          const linkToTheCarrosselProduct = "/productpage/" + e?.id;
          return (
            <Carousel.Item>
              <Row
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 1500,
                  margin: "auto",
                }}
              >
                <Col
                  className="sumir"
                  xs={2}
                  style={{
                    margin: 10,
                    justifyContent: "right",
                    paddingLeft: 50,
                  }}
                >
                  <h4>NOTAS</h4>
                  <h3>{e?.nota}</h3>
                  <h4>ALTITUDE</h4>
                  <h3>{e?.regiao.altitude}</h3>
                  <h4>TORRA</h4>
                  <h3>{e?.torra.nome}</h3>
                </Col>
                <Col className="w-400" xs={5} style={{ margin: 10 }}>
                  <Link to={linkToTheCarrosselProduct}>
                    <img
                      style={{
                        minHeight: "200px",
                        maxHeight: "857px",
                        maxWidth: "660px",
                      }}
                      className="d-block w-100 h-100"
                      src={
                        e?.foto_cafe
                          ? e?.foto_cafe
                          : "https://alavoura.com.br/wp-content/uploads/2020/06/tim-e1592429928966.jpeg"
                      }
                      alt="First slide"
                    />
                  </Link>
                </Col>
                <Col className="sumir" xs={3} style={{ margin: 10 }}>
                  <h2>{e?.nome}</h2>
                  <p>{e?.descricao}</p>
                  <h4>CORPO</h4>
                  <h3>{e?.corpo.nome}</h3>
                  <h4>VARIEDADE</h4>
                  <h3>{e?.variedade.nome}</h3>
                  <h4>ACIDEZ</h4>
                  <h3>{e?.acidez.nome}</h3>
                </Col>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </SliderContent>
  );
};
