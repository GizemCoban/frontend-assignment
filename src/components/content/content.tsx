import Button from '../button/button';
import Description from '../description/description';
import Title from '../title/title';

export interface ContentProps {
  subtitle: string;
  heroText: string;
  description: string;
  buttonText: string;
}

function Content({
  subtitle,
  heroText,
  description,
  buttonText,
}: Readonly<ContentProps>) {
  return (
    <div className='flex flex-col lg:items-end items-center max-w-[34.75rem] px-6 lg:px-0'>
      <Title subtitle={subtitle} heroText={heroText} />
      <Description className="lg:mb-8 lg:mt-5 mt-[1.375rem] mb-[1.3125rem]">{description}</Description>
      <Button>{buttonText}</Button>
    </div>
  );
}

export default Content;
