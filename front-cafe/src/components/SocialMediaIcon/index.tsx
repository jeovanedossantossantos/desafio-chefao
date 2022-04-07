import {
  FooterIconCircleStyle,
  FooterIconTextOnSide1,
  FooterIconTextOnSide2,
} from "./styles";

interface SocialMediaIconProps {
  SocialMediaIconImg?: string;
  SocialMediaIconText1?: string;
  SocialMediaIconText2?: string;
}

export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  SocialMediaIconImg,
  SocialMediaIconText1,
  SocialMediaIconText2,
}) => {
  return (
    <div style={{ flexWrap: "wrap", maxWidth: 200 }}>
      <FooterIconCircleStyle>
        <img src={SocialMediaIconImg} alt="" />
      </FooterIconCircleStyle>
      {SocialMediaIconText1 && SocialMediaIconText2 ? (
        <div>
          <FooterIconTextOnSide1> {SocialMediaIconText1}</FooterIconTextOnSide1>
          <FooterIconTextOnSide2> {SocialMediaIconText2}</FooterIconTextOnSide2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
