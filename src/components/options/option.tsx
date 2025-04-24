import type { PropsWithChildren } from 'react';
import { cn } from '../../libs/cn';
import type { OptionItem } from './type';
import { NavLink, useLocation } from 'react-router';
import CircleProgress from '../progress/circle-progress';

function Option({
  Icon,
  label,
  path,
}: Readonly<PropsWithChildren<OptionItem>>) {
  const location = useLocation();
  const inView = location.pathname.slice(1) === path;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          'snap-center min-w-[20.0625rem] w-[20.0625rem] h-[7.75rem] flex items-center justify-center gap-4 border-2 border-transparent hover:!border-daybreakblue-900 hover:!border-2 transition-all duration-200 cursor-pointer',
          isActive
            ? '[&_.path-icon-wrapper_path]:!fill-daybreakblue-900 bg-daybreakblue-500'
            : '[&_.path-icon-wrapper_path]:!fill-[#666666]',
        )
      }
    >
      <CircleProgress inView={inView} Icon={Icon} />

      <span className="font-medium text-xl/7 tracking-normal text-black">
        {label}
      </span>
    </NavLink>
  );
}

export default Option;
