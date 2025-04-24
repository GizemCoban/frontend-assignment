import type { ComponentProps, PropsWithChildren } from 'react';
import { cn } from '../../libs/cn';

type DescriptionProps = Pick<ComponentProps<'p'>, 'className'>;

function Description({
  children,
  className,
}: Readonly<PropsWithChildren<DescriptionProps>>) {
  return (
    <p
      className={cn(
        'font-normal text-sm/7 lg:text-xl/8 tracking-normal lg:tracking-[0.05rem] text-center lg:text-end text-dark-400',
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Description;
