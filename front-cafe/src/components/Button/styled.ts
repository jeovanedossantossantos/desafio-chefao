
import styled from "styled-components";

export const ButtonContainer = styled.button `
width: 14.60vw;
height: 4.5vw;
border: 1px solid #EEDCCD;
border-radius: 13px;
background-color: transparent ;
font-family: 'Poppins-SemiBold';
  font-size:1.0vw;
  color:#EEDCCD;
  text-transform: uppercase;
  
   
    @media (min-width: 360px) and (max-width: 400px) {
    font-size:12px;
    border-radius: 10px;
    height: 4vh;
    width: 10vh;
    }


    @media (min-width: 400px) and (max-width: 799px) {
    font-size:12px;
    border-radius: 10px;
    height: 4vh;
    width: 10vh;
    }

    @media (min-width: 801px) and (max-width: 1024px) {
    font-size:12px;
    border-radius: 10px;
    height: 4vh;
    width: 10vh;
    }
    



&:hover {
    transform: scale(1.02)
}
`