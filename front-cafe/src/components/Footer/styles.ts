import styled from "styled-components";

export const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column; 
   width: 100%;
   background: #438B70;

   @media (min-width: 1274px) {
   height: 15vh;
   }
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
   max-width:800px;
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
   font-family: 'Poppins';
   font-weight: 500;
   font-size: 16px;
   color: #F5F1F1;
   margin-top: 8vh;
   font-weight: 400;
   font-size: 14px;
   line-height: 21px;
   width: 100%;
   margin: 10px;
   font-family: 'Poppins-Medium';

   .no-copy
   {   
      margin: 5px;
      width:50px;
   }
   .copy
   {
      margin: 5px;
      width:200px;
      text-align: right;  
   }

@media (max-width: 428px) {
   font-size: 11px;
   display: flex; 
}


@media (max-width: 393px) 
{
   width:55vw;  
}

@media (max-width: 1275px)
 {
   font-size: 12px;
   width:55vw;
   display: flex;  
}
`;

export const FooterCopyrigthStyle = styled.div`
  
`;

export const FooterLine = styled.div`
 width: 8px;  
`;

export const SocialMediaIconStyle = styled.div`
   display: flex;
   width: 100px;

img {
   width: 39px;
   height: 39px;
}
`;

