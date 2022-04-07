import styled from "styled-components";
import homeHeaderBackgroundImage from "../../assets/images/homePageHeaderBackgroundn.webp";
import sectionAboutImage from "../../assets/images/sectionAbout.webp";

export const HomeHeaderBackground = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;  
    background: url(${homeHeaderBackgroundImage}) ;    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    filter: saturate(89%);
    
    @media only screen and (min-width: 1920px) {
        background-size: cover;

    }
    @media only screen and (max-width: 1440px) {
        background-position: 60% 22%;
        background-size: 1500px;
    }
    @media only screen and (max-width: 1366px) {
        background-position: 90% 19%;
        background-size: 1400px;
    }
    @media only screen and (max-width: 1280px) {
        background-position: 30% 18%;
        background-size: 1400px;
    }
    @media only screen and (max-width: 1024px) {
        background-size: 1500px;
        background-position: 50% 20%;
        height: 702px;
    }
    @media only screen and (max-width: 600px) {
        background-size: 1900px;
        background-position: 45.7% 24%;
        height: 938px;
    }
`;

export const BannerText = styled.div`
    color: #EFEFEF;
    margin-top: 8.6%;
    text-align: center;

    @media only screen and (max-width: 1440px) {
        margin-top: 11.6%;
    }
    @media only screen and (max-width: 1280px) {
        margin-top: 12.6%;
    }
    @media only screen and (max-width: 1024px) {
        margin-top: 14.6%;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 27.6%;
    }
    @media only screen and (max-width: 480px) {
        margin-top: 47.6%;
    }
    @media only screen and (max-width: 420px) {
        margin-top: 54.6%;
    }
    @media only screen and (max-width: 375px) {
        margin-top: 61.6%;
    }
    @media only screen and (max-width: 320px) {
        margin-top: 73.6%;
    }
`;

export const BannerTitle = styled.div`
    font-size: 4.444444444444445vw;
    font-weight: 300;
    letter-spacing: 0.44em;
    display: flex;
    justify-content: center;
    font-family: 'Poppins-Light';

    @media only screen and (max-width: 1024px) {
        font-size: 48px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 32px;
    }
`;

export const BannerIcon = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 1%;

    @media only screen and (max-width: 1024px) {
        margin-top: 3.6%;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 10.6%;
    }
    @media only screen and (max-width: 480px) {
        margin-top: 10.6%;
    }
    @media only screen and (max-width: 420px) {
        margin-top: 14.6%;
    }
    @media only screen and (max-width: 375px) {
        margin-top: 16.6%;
    }
    @media only screen and (max-width: 320px) {
        margin-top: 19.6%;
    }
`;
export const BannerDesc = styled.div`
    color: white;
    font-size: 0.985vw;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 4%;
    margin-left: 30vw;
    margin-right: 30vw;
    letter-spacing: 0.1em;
    font-family: 'Poppins-Medium';
    color: #FFFFFF;

    @media only screen and (max-width: 1024px) {
        font-size:14px;
        margin-left: 25vw;
        margin-right: 25vw;
        margin-top: 3.6%;
    }
    @media only screen and (max-width: 768px) {
        margin-left: 20vw;
        margin-right: 20vw;
    }
    @media only screen and (max-width: 600px) {
        margin-left: 15vw;
        margin-right: 15vw;
    }
    @media only screen and (max-width: 480px) {
        margin-top: 5.6%;
        margin-bottom: 50px;
        margin-left: 7vw;
        margin-right: 7vw;
    }
    @media only screen and (max-width: 420px) {
        margin-top: 6.6%;
        margin-left: 6vw;
        margin-right: 6vw;
    }
    @media only screen and (max-width: 375px) {
        margin-top: 7.6%;
        margin-left: 2vw;
        margin-right: 2vw;
    }
    @media only screen and (max-width: 320px) {
        margin-top: 8.6%;
    }
`;

export const BannerIconSpace = styled.div`
    padding-left: 0.7%;
`;

export const ButtonBottomMargin = styled.div`
    padding-bottom: 15vh;
`;

export const HomeAboutBackground = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100%;  
    justify-content: space-between;
    align-items: flex-start;
    height: 507px;
    background: url(${sectionAboutImage}) ;    
    background-repeat: no-repeat;
    background-size: contain;
    
    @media only screen and (min-width: 1920px) {
        background-size: cover;
    }
`;
