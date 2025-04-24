import type { PropsWithChildren } from 'react';

function Button({ children }: Readonly<PropsWithChildren>) {
  return (
    <button
      type="button"
      className="w-[6.25rem] lg:w-[8.4375rem] h-10 lg:h-[3.375rem] rounded-[0.0925rem] lg:rounded-sm border-[0.023125rem] lg:border-[0.03125rem] flex items-center justify-center gap-[0.463125rem] lg:gap-6 border-[#00000029]"
    >
      <span className="font-normal text-[0.925625rem] lg:text-xl leading-[100%] tracking-normal text-center align-middle text-dark-500">
        {children}
      </span>
    </button>
  );
}

export default Button;
