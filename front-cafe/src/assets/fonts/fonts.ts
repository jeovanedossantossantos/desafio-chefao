import { createGlobalStyle } from 'styled-components';
import NavFontPoppins from '../../assets/fonts/Poppins/Poppins-Bold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${NavFontPoppins}) format('ttf');
        font-weight: 700;
    }
`;
