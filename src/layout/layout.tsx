import Options from '../components/options/options';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="lg:bg-[#F5F5F7] pb-16 pt-14 lg:pb-[12.5rem] lg:pt-[14.5625rem] h-dvh overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="bg-[#fbfcfc] flex items-end w-full [&>*]:max-w-screen-2xl [&>*]:mx-auto">
          <div className="lg:max-h-[38.3125rem] lg:h-[38.3125rem]  lg:pt-[6.7rem] lg:pl-[4.125rem] lg:pr-[8.25rem]  flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between items-center overflow-hidden">
            <Outlet />
          </div>
        </div>
        <Options />
      </div>
    </div>
  );
}

export default Layout;
