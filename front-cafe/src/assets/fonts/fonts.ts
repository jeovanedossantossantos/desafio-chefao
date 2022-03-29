import { createGlobalStyle } from 'styled-components';
import NavFontPoppins from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${NavFontPoppins}) format('truetype');;
        font-weight: 600;
    }
`;
