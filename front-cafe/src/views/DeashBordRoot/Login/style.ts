import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #8c52e5;
   

    .card{
        display: grid;
        background: #f9f9f9;
        max-width: 400px;
        min-width: 300px;
        border-radius: 22px;
        padding: 22px;
        
        text-align: center;
        
        h5{
            font-family: 'Roboto', sans-serif;
            text-align: center;
            font-size: 22px;
            color: #8c52e5;
        }
        form{
            text-align: center;

            input{
                width: 98%;
                height: 32px;
                border-radius: 22px;
                padding: 5px;
                border: 1px solid #e2e2e2;
                
                margin: 10px 0 0 0;
               

               
            }
            button{
                font-weight: bold;
                color: #fff;
                margin-top: 5px;
                width: 100%;
                border: none;
                background: #68de5a;
                padding: 5px;
                border-radius: 12px;
                transition: 0.6s;
                cursor: pointer;
                &:hover{
                    background: #8c52e5;
                    color: #fff;
                }
            }
        }
    }
`