import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #A18262;
   
    a{
        color: #4B3621
    }
    .card{
        display: grid;
        background: transparent;
        border: none;
        max-width: 400px;
        min-width: 200px;
        border-radius: 22px;
        padding: 22px;
        margin: 10px;
        
        text-align: center;
        
        h5{
            font-family: 'Roboto', sans-serif;
            text-align: center;
            font-size: 22px;
            color: #4B3621;
        }
        form{
            text-align: center;

            input{
                width: 98%;
                height: 32px;
                /* border-radius: 22px; */
                padding: 5px;
                border: 1px solid #e2e2e2;
                
                margin: 10px 0 0 0;
               

               
            }
            button{
                font-weight: bold;
                color: #000000;
                margin-top: 5px;
                width: 98%;
                border: none;
                background: #4B3621;
                padding: 5px;
                /* border-radius: 12px; */
                transition: 0.6s;
                cursor: pointer;
                &:hover{
                    background: #A38068;
                    color: #fff;
                }
            }
        }
    }
`
export const Video = styled.video`
 position: fixed;
  right: 0;
  bottom: 0;
  width: auto;
  /* max-width:100%; */
  /* min-width: 100%; */
  
  height: auto;
  background-cover:cover;
  /* transform: rotate(90deg);
 -ms-transform: rotate(90deg);
 -webkit-transform: rotate(90deg); */
  source{
     /* height: 100vh; */
  
      
  }
  
  
`