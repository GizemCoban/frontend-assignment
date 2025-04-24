import HeroText from "./hero-text";
import Subtitle from "./subtitle";

export interface TitleProps {
  subtitle: string;
  heroText: string;
}

function Title({ heroText, subtitle }: Readonly<TitleProps>) {
  return (
    <div className="flex flex-col gap-4">
      <Subtitle>{subtitle}</Subtitle>
      <HeroText>{heroText}</HeroText>
    </div>
  )
}

export default Title