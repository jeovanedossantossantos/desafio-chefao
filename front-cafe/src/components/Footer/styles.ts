import styled from "styled-components";

export const FooterStyle = styled.footer`

   display: flex;
   /* flex-direction: column; */
  width: 100%;
   /* height: 44.116vh;    */
   /* Height of the footer */
   min-height: 417px;
   background: #438B70;
   /* margin-top: 28vh; */ /* distance between slider and the footer */
   /* padding-left: 9.9vw; */

`;

export const FooterLogoStyle = styled.div`
padding-top: 5vh;
`;

export const FooterTextStyle = styled.div`


font-family: 'Poppins-Light';
font-weight: 300;
   font-size:  14px;
   line-height: 24px;
   color:#DACFCE;
   max-width:300px;
   margin-top: 1.4%;
   margin-bottom: 2.4%;
   border-radius: 50px;
   position: static;

`;
export const FooterLink = styled.div`
   display: flex;
   flex-wrap:wrap;
  
`
export const FooterLinkStyle = styled.div`
display: flex;
flex-wrap:wrap;
font-family: 'Poppins-Light';
font-weight: 400;
font-size: 14px;
color: #F5F1F1;
margin-top: 8vh;
font-weight: 400;
font-size: 14px;
line-height: 21px;
width: 100%;
/* max-width:400px;
min-width: 200px; */

margin: 10px;

.no-copy{ //Col é igual a uma div
  
   margin: 5px;
   width:50px;
}
.copy{
   margin: 5px;
   width:200px;
   text-align: right;
  
}
`;

export const FooterCopyrigthStyle = styled.div`
   /* margin-right: -36vw;
   margin-left: 27.4vw; */
   /* width: 50%; */
   
`;

export const SocialMediaIconStyle = styled.div`
display: flex;

width: 200px;
margin: 20px;
/* padding-left: -1vw; */





img {
   width: 51px;
   height: 51px;
}
`;

