import { BrowserRouter, Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const PrivateRoute: any = ({componet: Component, path, Path, ...rest}: any) =>{
    const isLoggedIn: string | null = localStorage.getItem('@cafeToken')
    
    const isSectionActive: any =() =>{
        if(isLoggedIn === null){
            return false
        }else{
            const onlYTokem: any = isLoggedIn
            const tokenPayload: any = jwt_decode(onlYTokem)
            const expSeconds = tokenPayload.exp
            const timeNow = Date.now()/1000;
            return timeNow > expSeconds ? false : true;
        }
    }
    return (
        <Route {...rest} render={(props: any) => (
            isSectionActive() ? <Component {...props}/> : <Navigate to={'/'}/>
        )}/>
    )
}
export default PrivateRoute

