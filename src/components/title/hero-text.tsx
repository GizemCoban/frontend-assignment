import type { PropsWithChildren } from 'react'

function HeroText({ children }: Readonly<PropsWithChildren>) {
  return (
    <h2 className='font-bold text-[2rem] leading-10 tracking-normal text-center lg:text-end text-dark-500'>{children}</h2>
  )
}

export default HeroText