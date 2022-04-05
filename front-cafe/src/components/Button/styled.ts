
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
  @media only screen and (max-width: 1024px) {
    font-size:12px;
    border-radius: 10px;
    height: 5.5vw;
    }
    @media only screen and (max-width: 645px) {
    font-size:9px;
    border-radius: 10px;
    height: 10vw;
    }
&:hover {
    transform: scale(1.02)
}
`