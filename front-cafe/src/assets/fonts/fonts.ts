import { createGlobalStyle } from 'styled-components';
import NavFontPoppins from '../../assets/fonts/Poppins/Poppins-Bold.ttf'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${NavFontPoppins}) format('truetype');;
        font-weight: 700;
    }
`;
