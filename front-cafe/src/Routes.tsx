import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom'
import { Home } from './views/Home'


function Rotas() {

    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Home/>}></Route>
            </RoutesWrapper>

        </BrowserRouter>
    )

}

export default Rotas