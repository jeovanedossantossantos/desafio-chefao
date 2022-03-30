import { BrowserRouter, Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom'
import PrivateRoute from "./private.routes";
import { Cadastra } from './views/DeashBordRoot/Cadastro';
import { Formulario } from './views/DeashBordRoot/Formulario';
import Login from './views/DeashBordRoot/Login';
import { Home } from './views/Home'
import { Contact } from './views/Contact'
import { SearchPage } from './views/SearchPage'
import { ProductPage } from './views/ProductPage'
import jwt_decode from 'jwt-decode'
import { Lista } from './views/DeashBordRoot/Lista';

function Rotas() {

    const isLoggedIn: string | null = localStorage.getItem('@cafeToken')

    const isSectionActive: any = () => {
        if (isLoggedIn === null) {
            return false
        } else {
            const onlYTokem: any = isLoggedIn
            const tokenPayload: any = jwt_decode(onlYTokem)
            const expSeconds = tokenPayload.exp
            const timeNow = Date.now() / 1000;
            return timeNow > expSeconds ? false : true;
        }
    }

    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Home />}></Route>
                <Route path="/#about" element={<Home />}></Route>
                <Route path="/searchpage" element={<SearchPage />}/>
                <Route path="/productpage" element={<ProductPage />}></Route>
                <Route path="/cadastra" element={<Cadastra />}></Route>
                <Route path="/login" element={<Login />}></Route>
                
                
                {isSectionActive() &&
                   <>
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/lista" element={<Lista />}/>
                   </>
                }
                {!isSectionActive() && 
                 <Route path="/formulario" element={<Navigate to="/"/>}/>
                 }
                

                {/* {!isSectionActive() ? 
                <Route path="/formulario" element={<Navigate to="/"/>}/>: 
                <Route path="/formulario" element={<Formulario/>}/>} */}

                {/* <PrivateRoute path="/formulariio" component={<Formulario/>}></PrivateRoute> */}
            </RoutesWrapper>

        </BrowserRouter>
    )

}

export default Rotas