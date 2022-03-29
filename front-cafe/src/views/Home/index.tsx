import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { HomeHeaderBackground, Video, BannerText, BannerTitle, BannerIcon, BannerDesc, BannerIconSpace, } from './style';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLine  from '../../assets/images/Rectangle5iconBanner.svg';
import BannerIconImage from '../../assets/images/VectoriconBanner.svg';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

// import {api} from '../../serve'

interface DadosProps {
    id: number,
    nome: string,
    descricao: string,
}

 
export const Home: React.FC = () => {
    return (
        <div>
            <HomeHeaderBackground>
            
            {/* <Video src={require("../../assets/videos/production ID_4820118.mp4")} autoPlay muted loop/> */}
            <Header />
            <BannerText>
            <Container fluid>
  <Row>
    <Col><BannerTitle>coffee experience</BannerTitle></Col>
  </Row>
  <Row>
    <Col><BannerIcon><img src={BannerLine} alt='' width={'55px'}/><BannerIconSpace/><img src={BannerIconImage} alt='' width={'22px'}/><BannerIconSpace/><img src={BannerLine} alt='' width={'55px'}/></BannerIcon></Col>
  </Row>
  <Row>
    <Col><BannerDesc>Nós produzimos cafés para coffe lovers que amam café <br/>em todos os sentidos, do olfato ao tato</BannerDesc></Col>
  </Row>
  <Row>
    <Col><Button /></Col>
  </Row>
</Container>
</BannerText>

</HomeHeaderBackground>
<footer>
<Footer/>
</footer>

        </div>
    )

    // const [dados, setDados] = useState<DadosProps[]>([])

    // const req = async ()=>{
    //     try{
    //         const resposta = await api.get("/listar-variedade")
    //         const {data} = resposta
    //         setDados(data)
    //         console.log(resposta.data)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // useEffect(()=>{
    //     req()



    // },[])
    // return(
    //     <div>
    //         Olá, eu sou a home!!
    //         <button onClick={()=>req()}>aqui</button>

    //         {dados.map(d=>{
    //             return <div>
    //                 Nome: {d.nome}
    //             </div>
    //         })}
    //     </div>
    // )

}