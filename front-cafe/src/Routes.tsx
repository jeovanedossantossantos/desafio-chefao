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

function Rotas() {
    const isLoggedIn: string | null = localStorage.getItem("@cafeToken");
    const isSectionActive: any = () => {
      if (isLoggedIn === null) {
        return false;
      } else {
        const onlYTokem: any = isLoggedIn;
        const tokenPayload: any = jwt_decode(onlYTokem);
        const expSeconds = tokenPayload.exp;
        const timeNow = Date.now() / 1000;
        return timeNow > expSeconds ? false : true;
      }
    };
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
          {isSectionActive() && (
            <Route path="/formulario" element={<Navigate to="/" />} />
          )}
          {!isSectionActive() && (
            <>
              <Route path="/formulario" element={<Formulario />} />
              <Route path="/lista" element={<Lista />} />
            </>
          )}
        </RoutesWrapper>
      </BrowserRouter>
    );
  }
  
  export default Rotas;
  
