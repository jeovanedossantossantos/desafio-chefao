import styled from "styled-components"

export const SearchBarContainer = styled.div`
display: flex;
justify-content: left;
flex-direction: column;
/* margin-left: 15vw; */
margin-top: 10vh;
/* margin: auto; */
justify-content:center;
margin-bottom:8vw;
@media screen 
  and (min-width: 460px) 
  and (max-width: 801px){
    margin-left: 5vw;
}
.texto{


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 149%;
/* or 24px */

text-align: center;
text-transform: uppercase;

color: #281813;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 28px 0px;
}

`;

export const SearchBarTitleStyle = styled.h1`
font-family: 'Poppins-Bold';
font-weight: 700;
font-size: 24px;
line-height: 36px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #281813;
margin-bottom: 2.8vh;

`;

export const Form = styled.form`
 position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1.9rem;
  height: 2rem;
  /* width: 62vw; */
  border: solid 1px #281813;
  border-radius: 10px;
  @media screen 
  and (min-width: 802px) 
  and (max-width: 1024px){
    width: 90% !important;
}

@media screen 
  and (min-width: 460px) 
  and (max-width: 801px){
    width: 78% !important;
}
  img {
    justify-content: right;
    margin-right: -14px;
  }
`;

export const SearchBarInput = styled.input`
font-size: 14px;
font-family: 'Poppins-Regular';
font-style: normal;
font-weight: 500;
font-size: 14px;
width: 63vw;
background-color: transparent;
text-transform:uppercase;
margin-left: -10px;
  color: #281813;
  opacity: 50%;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #281813;
  }

`;