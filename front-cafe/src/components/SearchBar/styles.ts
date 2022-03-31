import styled from "styled-components"

export const SearchBarContainer = styled.div`
display: flex;
justify-content: left;
flex-direction: column;
margin-left: 15vw;
margin-top: 17vh;
`;

export const SearchBarTitleStyle = styled.h1`
font-family: 'Poppins-Bold';
font-weight: 700;
font-size: 24px;
line-height: 36px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #EFEFEF;
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
  width: 62vw;
  border: solid 1px white;
  border-radius: 10px;
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
  color: white;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;