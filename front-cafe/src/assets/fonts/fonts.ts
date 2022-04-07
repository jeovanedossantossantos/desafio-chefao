import { createGlobalStyle } from "styled-components";
import NavFontPoppinsBold from "../../assets/fonts/Poppins/Poppins-Bold.ttf";
import NavFontPoppinsLight from "../../assets/fonts/Poppins/Poppins-Light.ttf";
import NavFontPoppinsMedium from "../../assets/fonts/Poppins/Poppins-Medium.ttf";
import NavFontPoppinsRegular from "../../assets/fonts/Poppins/Poppins-Regular.ttf";
import NavFontPoppinsSemiBold from "../../assets/fonts/Poppins/Poppins-SemiBold.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins-Bold';
        src: local('Poppins'),
        url(${NavFontPoppinsBold}) format('truetype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Poppins-Light';
        src: local('Poppins'),
        url(${NavFontPoppinsLight}) format('truetype');
        font-weight: 300;
    }

    @font-face {
        font-family: 'Poppins-Medium';
        src: local('Poppins'),
        url(${NavFontPoppinsMedium}) format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Poppins-SemiBold';
        src: local('Poppins'),
        url(${NavFontPoppinsSemiBold}) format('truetype');
        font-weight: 600;
    }
    
    @font-face {
        font-family: 'Poppins-Regular';
        src: local('Poppins'),
        url(${NavFontPoppinsRegular}) format('truetype');
        font-weight: 400;
    }
`;
