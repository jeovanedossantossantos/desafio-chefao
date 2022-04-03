import {HeaderProduct} from '../../components/HeaderProduct';
import {ContentBackground, ContextoPropCafe, Paragrafo, ProductHeaderBackground, Titulo, TituloPropCafe} from './styles';
import {SearchBar} from '../../components/SearchBar';
import {SearchCard} from '../../components/SearchCard';
import { ContentContact } from '../../components/Contact/styles';
import { Col, Container, Row } from 'react-bootstrap';
import LogoImageProduct from '../../assets/images/MockupsCoffee1.svg';


export const ProductPage: React.FC = () => {
    return (     
    <div>
         <ProductHeaderBackground>
             <HeaderProduct/>    
        </ProductHeaderBackground>

            <ContentBackground>
            <Container>
                    <Row>
                        <Col sm={4}><img src={LogoImageProduct} alt='' /></Col>

                        <Col sm={7} style={{paddingLeft:"120px"}}  >
                        <div>
                        <Titulo>
                        Café Mantiqueira de Minas
                        </Titulo>
                        </div>
                        <Paragrafo>
                            Café mantiqueira de minas vem direto da fazenda xxxxx e com notas de uva vermelha e com um corpo cremoso, perfeito para comer com a comida xxxx
                        </Paragrafo>
                     
                   
                        <Row xs={2} md={4} lg={6}>
                            <Col lg={6}>
                                <TituloPropCafe>
                                        Corpo
                                </TituloPropCafe>
                                    <ContextoPropCafe>
                                        Cremoso
                                    </ContextoPropCafe>

                                <TituloPropCafe>
                                         Variedade
                                 </TituloPropCafe>
                                    <ContextoPropCafe>
                                            Bourbon amarelo
                                    </ContextoPropCafe>

                                <TituloPropCafe>
                                         Acidez
                                </TituloPropCafe>
                                    <ContextoPropCafe>
                                            Média alta
                                    </ContextoPropCafe>

                            </Col>
                            <Col lg={4}>    
                                <TituloPropCafe>
                                     Nota
                                </TituloPropCafe>
                                    <ContextoPropCafe>
                                     Uva vermelha
                                    </ContextoPropCafe>

                                 <TituloPropCafe>
                                     Altitude
                                </TituloPropCafe>
                                    <ContextoPropCafe>
                                        1.200m
                                    </ContextoPropCafe>

                                 <TituloPropCafe>
                                        Torra
                                </TituloPropCafe>
                                    <ContextoPropCafe>
                                        Média
                                    </ContextoPropCafe>
                            </Col>
                        </Row>
                    
                        </Col>
     
                    </Row>                 
                    </Container>

            </ContentBackground>
    </div>
    )
}