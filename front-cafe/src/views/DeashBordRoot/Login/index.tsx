
import React, { useCallback, useState, FormEvent } from "react";
import { Container } from "./style";
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Loader from "../../../components/Loade";
import { api } from "../../../serve";




interface IDate {
    
   
    email: string;
    
    senha: string;
    
}


const SignIn: React.FC = () => {

    const [data, setDate] = useState<IDate>({} as IDate)
    const [load, setLoad] = useState(false)
    const push = useNavigate()

    
    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        
        api.post('/login', data).then(
            
            response => {
                const sessionToken = JSON.stringify(response.data.tokem)
                localStorage.setItem('@gamaServiceToken',sessionToken)
                setLoad(false)
                toast.success("Login realizado com sucesso!", {
                    hideProgressBar: false,
                    // onClose: () => push('/dashboard')
                })

            }

        ).catch(e => {toast.error("Oops, algo deu errado!")})
            .finally(()=>setLoad(false))
    }, [data, push])
    if (load) {
        return(
            <Loader/>
        )
    }
    return (
        <Container>

            <div className="card">
                <h5>Logar</h5>
                <form onSubmit={hadleSumbmit}>
                    
                    
                   
                   
                    <input
                        type="email"
                        placeholder="Informe seus email"
                        onChange={e => setDate({ ...data, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Infomer seu Senha"
                        onChange={e => setDate({ ...data, senha: e.target.value })}
                    />
                   
                    
                    <button type="submit" value="Logar">Logar</button>
                </form>
                <Link to={"/cadastra"}>Cadastre-se</Link>
            </div>
        </Container>
    );
}
export default SignIn

