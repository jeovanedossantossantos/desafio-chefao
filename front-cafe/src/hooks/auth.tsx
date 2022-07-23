import React from "react";


export const useAuth = ()=>{

    return (localStorage.getItem("@cafeToken")? true : false);

}