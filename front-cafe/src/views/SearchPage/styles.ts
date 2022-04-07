import styled from "styled-components";

export const SearchHeaderBackground = styled.div`
    width: 100%;  
    height: 113px;
    background: #39231B;
    
    @media only screen and (min-width: 1920px) {
        background-size: cover;

    }
    @media (max-width:991px){
    
    }
`;

export const BackgroundColorFill = styled.div`
    background-color: #FAF4F0;
    height:130vh;

    @media only screen and (min-height: 2160px) {
        height: 80vh;
    }
    @media only screen and (min-width: 2160px) {
        height: 140vh;
    }
    @media only screen and (max-height: 900px) {
        height: 160vh;
    }
    @media only screen and (max-height: 800px) {
        height: 170vh;
    }
    @media only screen and (max-height: 768px) {
        height: 170vh;
    }
    @media only screen and (max-height: 600px) {
        height: 215vh;
    }
    @media only screen and (max-height: 420px) {
        height: 735vh;
    }
    @media only screen and (max-height: 320px) {
        height: 955vh;
    }
`;
