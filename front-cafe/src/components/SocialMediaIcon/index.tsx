
import {FooterIconCircleStyle, FooterIconTextOnSide1, FooterIconTextOnSide2 } from './styles'

interface SocialMediaIconProps {
    SocialMediaIconImg?: string;
    SocialMediaIconText1?: string;
    SocialMediaIconText2?: string;
}

export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({SocialMediaIconImg, SocialMediaIconText1, SocialMediaIconText2}) => {


  return (
<div>

<FooterIconCircleStyle><img src={SocialMediaIconImg} alt=''/></FooterIconCircleStyle>
<FooterIconTextOnSide1> {SocialMediaIconText1}</FooterIconTextOnSide1>
<FooterIconTextOnSide2> {SocialMediaIconText2}</FooterIconTextOnSide2>
</div>
  )
}