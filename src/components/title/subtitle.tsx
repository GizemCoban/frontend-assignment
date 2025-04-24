import type { PropsWithChildren } from 'react';

function Subtitle({ children }: Readonly<PropsWithChildren>) {
  return (
    <h1 className="font-extrabold tracking-[2px] text-center uppercase text-primary-500 leading-[100%] lg:text-end">
      {children}
    </h1>
  );
}

export default Subtitle;
