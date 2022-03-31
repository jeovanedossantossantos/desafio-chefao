import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { api } from "../../../serve";

interface CadastroProps {
    nome: string;
    email: string;
    senha: string;
    authorization: string;
}

export const Cadastra: React.FC = () => {
    const [data, setData] = useState<CadastroProps>({} as CadastroProps)
    const [codigoAuthorization, setCodigoAuthorization] = useState("")
    const push = useNavigate()

    const requestCadastra = async () =>{
        try{
           const resposta = await api.post('/cadastra-usuario', data,{
               headers: {
                   authorization: codigoAuthorization
               }
           })
            console.log("ok")
            push("/login")
        }catch(err){
            
            Toastify({
                text: "This is a toast",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #b00000, #9b9a9a)",
                }
              }).showToast();
        }
        
        
    } 


    return (
        <Container>
            <h1>Cadastra</h1>
            <Form.Group className="mb-3">
                <Form.Label>Codigo de Autorização</Form.Label>
                <Form.Control placeholder="Codigo de Autorização"  onChange={e => setCodigoAuthorization(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Seu nome:</Form.Label>
                <Form.Control placeholder="Seu nome"  onChange={e => setData({...data, nome: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Seu e-mail:</Form.Label>
                <Form.Control placeholder="Seu e-mail"  onChange={e => setData({...data, email: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sua senha:</Form.Label>
                <Form.Control placeholder="Sua senha"  onChange={e => setData({...data, senha: e.target.value})} />
            </Form.Group>
           
            <button onClick={()=>requestCadastra()}>Cadastra</button>

            

        </Container>
    )
}