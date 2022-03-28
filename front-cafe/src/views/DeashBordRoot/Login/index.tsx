
import React, { useCallback, useState, FormEvent } from "react";
import { Container, Video } from "./style";
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


    const hadleSumbmit = async () => {
        // e.preventDefault()
        // useCallback((e: FormEvent<HTMLFormElement>)
        setLoad(true)

        await api.post('/login', data).then(



            response => {

                const sessionToken = JSON.stringify(response.data.tokem)
                localStorage.setItem('@cafeToken', sessionToken)
                setLoad(false)
                // toast.success("Login realizado com sucesso!", {
                //     hideProgressBar: false,
                //     onClose: () => push('/formulario')
                // })
                push('/formulario')

            }


        ).catch(e => { toast.error("Oops, algo deu errado!") })
            .finally(() => setLoad(false))
    }
    if (load) {
        return (
            <Loader />
        )
    }


    return (
        <Container>
            <Video autoPlay muted loop id="myVideo">
                <source src={require("../../../assets/videos/production ID_4820118.mp4")} type="video/mp4"/>
            </Video>
            <div className="card">
                <h5>Logar</h5>
                <form >




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


                    <button onClick={() => hadleSumbmit()} value="Logar">Logar</button>
                </form>
                <Link to={"/cadastra"}>Cadastre-se</Link>
            </div>
        </Container>
    );
}
export default SignIn

