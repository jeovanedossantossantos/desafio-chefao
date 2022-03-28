import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { HomeHeaderBackground, Video } from './style';


// import {api} from '../../serve'

interface DadosProps {
    id: number,
    nome: string,
    descricao: string,
}


export const Home: React.FC = () => {
    return (
        <div>
            <HomeHeaderBackground/>
            
            {/* <Video src={require("../../assets/videos/production ID_4820118.mp4")} autoPlay muted loop/> */}
            <Header />


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