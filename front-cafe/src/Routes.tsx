import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom'
import PrivateRoute from "./private.routes";
import { Cadastra } from './views/DeashBordRoot/Cadastro';
import Login from './views/DeashBordRoot/Login';
import { Home } from './views/Home'


function Rotas() {

    return (
        <BrowserRouter>
            <RoutesWrapper>
                {/* <Route path="/" element={<Home/>}></Route> */}
                <Route path="/cadastra" element={<Cadastra/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                
                {/* <PrivateRoute path="/cadastra" component={<Cadastra/>}></PrivateRoute> */}
            </RoutesWrapper>

        </BrowserRouter>
    )

}

export default Rotas