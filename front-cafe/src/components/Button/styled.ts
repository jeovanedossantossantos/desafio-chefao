import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 14.60vw;
  height: 4.5vw;
  border: 1px solid #EEDCCD;
  border-radius: 13px;
  background-color: transparent ;
  font-family: 'Poppins-SemiBold';
  font-size:1.0vw;
  color:#EEDCCD;
  text-transform: uppercase;
  
   
  @media (min-width: 360px) and (max-width: 400px) 
  {
    font-size:10px;
    border-radius: 10px;
    height: 15vw;
    width: 30vw;
  }


  @media (min-width: 400px) and (max-width: 500px) 
  {
    font-size:12px;
    border-radius: 10px;
    height: 15vw;
    width: 30vw;
  }

  @media (min-width: 501px) and (max-width: 600px)
   {
    font-size:12px;
    border-radius: 10px;
    height: 15vh;
    width: 30vh;
  }

  @media (min-width: 601px) and (max-width: 700px) 
  {
    font-size:12px;
    border-radius: 10px;
    height: 10vh;
    width: 25vh;
  }

  @media (min-width: 701px) and (max-width: 800px)
   {
    font-size:12px;
    border-radius: 10px;
    height: 10vh;
    width: 25vh;
  }

  @media (min-width: 801px) and (max-width: 900px) 
  {
    font-size:12px;
    border-radius: 10px;
    height: 10vh;
    width: 25vh;
  }
  
  @media (min-width: 901px) and (max-width: 1024px)
   {
    font-size:12px;
    border-radius: 10px;
    height: 10vh;
    width: 25vh;
  }

  &:hover {
  transform: scale(1.02)
}
`;
