import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SliderContent} from './styles'
import SliderImg from '../../assets/images/homePageAboutBackground.png';
import { api } from '../../serve';

interface DataProps {
  id:number,
  nome:string,
  foto_cafe:string,
  foto_cafe_1:string,
  foto_cafe_2:string,
  nota:string,
  peso_liquido:string,
  preco:string,
  descricao:string,
  regiao_id:number,
  corpo_id:number,
  variedade_id:number,
  torra_id:number,
  acidez_id:number,
  moagem_id:number
}


export const Slider: React.FC = () => {
    const [data, setData]=useState<DataProps[]>([])  
    const [vetor, setVetor]=useState<DataProps[]> ([])
    const res = async()=>{ 
    try{
      const resposta = await api.get('/cafes')
      setData(resposta.data)  
      setVetor(resposta.data[0])
    }
    catch (error){
      console.log(error)
    }
   }

  useEffect(()=>{res()}, [])

    return (

        <SliderContent>
      
        {
          vetor.map(e =>{
            return (  
               <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={e.foto_cafe}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                 src={e.foto_cafe_1}
                  alt="Second slide"
                />
            
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={e.foto_cafe_2}
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>)
          })
        }

      </SliderContent>
    );
}