import { HeaderProduct } from '../../components/HeaderProduct';
import { ContentBackground, ContextoPropCafe, Paragrafo, ProductHeaderBackground, Titulo, TituloPropCafe, BackgroundFromTheContentBackground,ColumnMargin, RowMargin } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { SearchCard } from '../../components/SearchCard';
import { ContentContact } from '../../components/Contact/styles';
import { Col, Container, Row } from 'react-bootstrap';
import LogoImageProduct from '../../assets/images/MockupsCoffee1.svg';
import { useParams } from 'react-router-dom';
import { api } from '../../serve';
import { useEffect, useState } from 'react';
import { DataProps } from '../../Interfaces/DataProps';
import { Footer } from '../../components/Footer';



export const ProductPage: React.FC = () => {

    const {id} = useParams()
    const [data, setData] =  useState<DataProps>()
    const buscarUm = async () => {
        try{
            const resposta = await api.get("/cafes/"+id)
            setData(resposta.data)
            console.log(resposta.data[0])
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(() => {
        buscarUm()
    },[])
    return (
        <div>
                        <BackgroundFromTheContentBackground>
            <ProductHeaderBackground>
                <HeaderProduct />
            </ProductHeaderBackground>

            <ContentBackground>
                <Container>
                    <Row>
                        <Col sm={4}><img src={data?.foto_cafe} alt='' style={{width:'130%', marginLeft:'1.1vw', marginTop: '-12%'}}/></Col>

                        <Col sm={7} style={{ paddingLeft: "10vw" }}  >
                            <div>
                                <Titulo >
                                    {/* Café Mantiqueira de Minas */}
                                    {data?.nome}
                                </Titulo>
                            </div>
                            <Paragrafo>
                                {/* Café mantiqueira de minas vem direto da fazenda xxxxx e com notas de uva vermelha e com um corpo cremoso, perfeito para comer com a comida xxxx */}
                                {data?.descricao}
                            </Paragrafo>

                            <RowMargin>
                            <Row xs={2} md={4} lg={6}>

                                <Col lg={6}>
                                    <TituloPropCafe>
                                        Corpo
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                        {/* Cremoso */}
                                        {data?.corpo.nome}
                                    </ContextoPropCafe>

                                    <TituloPropCafe>
                                        Variedade
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                        {data?.variedade.nome}
                                    </ContextoPropCafe>

                                    <TituloPropCafe>
                                        Acidez
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                       {data?.acidez.nome}
                                    </ContextoPropCafe>

                                </Col>
                                                                    <ColumnMargin>
                                <Col lg={4}>
                                    <TituloPropCafe>
                                        Nota
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                       {data?.nota}
                                    </ContextoPropCafe>

                                    <TituloPropCafe>
                                        Altitude
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                        {data?.regiao.altitude}
                                    </ContextoPropCafe>

                                    <TituloPropCafe>
                                        Torra
                                    </TituloPropCafe>
                                    <ContextoPropCafe>
                                       {data?.torra.nome}
                                    </ContextoPropCafe>
                                </Col>
                                </ColumnMargin>
                            </Row>
                            </RowMargin>
                        </Col>

                    </Row>
                
                </Container>
               
            </ContentBackground>
            <Footer/>
            </BackgroundFromTheContentBackground>

            </div>
    )
}