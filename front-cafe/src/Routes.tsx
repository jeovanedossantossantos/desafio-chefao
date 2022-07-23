import {
    BrowserRouter,
    Routes as RoutesWrapper,
    Route,
    Navigate
} from 'react-router-dom'
import { Cadastra } from './views/DeashBordRoot/Cadastro';
import { Formulario } from './views/DeashBordRoot/Formulario';
import Login from './views/DeashBordRoot/Login';
import { Home } from './views/Home'
import { SearchPage } from './views/SearchPage'
import { ProductPage } from './views/ProductPage'
import { ContactPage } from './views/ContactPage'
import jwt_decode from 'jwt-decode'
import { Lista } from './views/DeashBordRoot/Lista';
import { useAuth } from './hooks/auth';
import { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from './hooks/context';

function Rotas() {
    const auth = useAuth()
    const [login, setLogins] = useState<boolean>(false)
    const isLoggedIn: string | null = localStorage.getItem("@cafeToken");
    const { paginaAtual } = useContext(AuthorizationContext)
    // const isSectionActive: any = () => {
    //   if (isLoggedIn === null) {
    //     return false;
    //   } else {
    //     const onlYTokem: any = isLoggedIn;
    //     const tokenPayload: any = jwt_decode(onlYTokem);
    //     const expSeconds = tokenPayload.exp;
    //     const timeNow = Date.now() / 1000;
    //     return timeNow > expSeconds ? false : true;
    //   }
    // };
    const isSectionActive =()=>{
      if(login===false){
        console.log("Nulll ")
        console.log(isLoggedIn)
        return false
      }
      console.log(isLoggedIn)
      return true

    }
    useEffect(() => {
      setLogins(auth)
      
    },[paginaAtual])
    return (
      <BrowserRouter>
        <RoutesWrapper>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/productpage/:id" element={<ProductPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/cadastra" element={<Cadastra />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path={`/detalhes/:id`} element={<ProductPage />} />
         
          {login ? (
            <>
              <Route path="/formulario" element={<Formulario />} />
              <Route path="/lista" element={<Lista />} />
            </>
          ):(<Route path="/*" element={<Navigate to="/" />} />)}
        </RoutesWrapper>
      </BrowserRouter>
    );
  }
  
  export default Rotas;
  
