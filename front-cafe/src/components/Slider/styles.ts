import styled from "styled-components";

export const SliderContent = styled.div`
overflow: hidden;
    display: flex;
    background-repeat: no-repeat;
    flex-direction: column;
   width: 100%;

    /* height: 73vh; */
    h4{
        

        font-family: 'Poppins-SemiBold';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        /* identical to box height */

        letter-spacing: 0.1em;
        color: #CD7254;
    }
    h3{
        font-family: 'Poppins-SemiBold';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height */

        letter-spacing: 0.1em;

        color: #281813;
    }
    h2{
        font-family: 'Poppins-SemiBold';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */

        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #301F1B;
    }
    p{
        font-family: 'Poppins-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1em;

        color: #574C49;
    }
  
    @media(max-width:858px){
        .sumir{
            display:none
        }
        .w-400{
        width:100%;
   
       img{
        width:500px;
       }
       }
    }


  
    
`;