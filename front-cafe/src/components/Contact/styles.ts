import styled from "styled-components";

export const ContactContainer = styled.div`
justify-content: left;
margin-left: 2vw;
margin-top: 8vh;

@media only screen and (min-width: 2160px) {
    margin-top: 3vh;
    }
`;

export const ContactTitleStyle = styled.h1`
font-family: 'Poppins-Medium';
font-size: 24px;
line-height: 36px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #EFEFEF;
margin-bottom: 2.8vh;
@media only screen and (min-width: 2160px) {
    margin-bottom: 0;
    }
`;

export const ContactLine = styled.div`
    border: 1px solid #FEFEFE;
    width: 40vw;
    display: inline-block;
    position: absolute;
    margin: 18px;
`;

export const ContentContact = styled.div`
display: flex;
margin-left: 10vw;
justify-content: left;
width: 116px;
height: 21px;


font-family: 'Poppins-Light';
font-size: 1vw;
line-height: 9vw;
letter-spacing: 0.05em;
text-transform: uppercase;

color: #EFEFEF;
@media only screen and (max-width: 991px) {
    font-size: 2vw;
    }

`;

export const Contentv2Contact = styled.div`
height: 4vw;
margin-left: 10vw;

font-family: 'Poppins-Light';
font-size: 3vw;
line-height: 12vw;
letter-spacing: 0.05em;
text-transform: uppercase;

color: #EFEFEF;
@media only screen and (min-width: 2160px) {
    font-size: 2vw;
    }
`;

export const SpaceContact = styled.div`
    line-height: 20vw;

`;

export const SpaceContactFinans = styled.div`
    justify-content: left;
    line-height: 17vw;

`;
