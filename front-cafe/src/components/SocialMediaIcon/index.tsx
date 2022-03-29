
import {FooterIconCircleStyle, FooterIconTextOnSide } from './styles'

interface SocialMediaIconProps {
    SocialMediaIconImg: string;
    SocialMediaIconText1: string;
    SocialMediaIconText2: string;
}


export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({SocialMediaIconImg, SocialMediaIconText1, SocialMediaIconText2}) => {


  return (
<div>

<FooterIconCircleStyle><img src='' alt=''/></FooterIconCircleStyle>
<FooterIconTextOnSide> {SocialMediaIconImg}</FooterIconTextOnSide>

</div>
  )
}