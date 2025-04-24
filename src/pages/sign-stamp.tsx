import { motion } from 'motion/react';
import Content from '../components/content/content';

function SignStampPage() {
  return (
    <>
      <Content
        subtitle="Sign & Stamp"
        heroText="One-Tap Focus"
        description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
        buttonText="Learn More"
      />
      {/* Image Section */}
      <div className="flex lg:items-end justify-center items-end lg:-order-1 flex-1  min-h-[22.03278542rem] h-[22.03278542rem] lg:h-[35rem] w-full">
        {/* mobile */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.img
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            src="/assets/images/sign-stamp-mid-big.png"
            alt="sign-stamp"
            className="relative min-w-[14.94537067rem] w-[14.94537067rem] lg:w-[22.8488121rem] block lg:hidden object-contain"
          />
          {/* left */}
          <motion.img
            initial={{
              opacity: 0,
              y: '300%'
            }}
            animate={{
              opacity: 1,
              y: '4rem'
            }}
            transition={{
              delay: 0.25,
              duration: .75,
              ease: 'easeInOut'
            }}
            src="/assets/images/sign-stamp-left-big.png"
            alt="sign-stamp"
            className="min-w-[8.88638783rem] w-[8.88638783rem] block lg:hidden left-[0.625rem] absolute"
          />
          {/* right */}
          <motion.img
            initial={{
              opacity: 0,
              y: '300%'
            }}
            animate={{
              opacity: 1,
              y: "0"
            }}
            transition={{
              delay: .5,
              duration: 1,
              ease: 'easeInOut'
            }}
            src="/assets/images/sign-stamp-right-big.png"
            alt="sign-stamp"
            className="min-w-[8.85558128rem] w-[8.85558128rem] block lg:hidden right-[0.625rem] absolute"
          />
        </div>
        {/* desktop */}
        <div className="relative">
          <motion.img
            initial={{ bottom: '-100%' }}
            animate={{ bottom: 0, transition: { duration: 1 } }}
            transition={{
              duration: 1,
              bottom: { ease: 'easeInOut' },
            }}
            src="/assets/images/sign-stamp-mid-big.png"
            alt="sign-stamp"
            className="relative min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block object-contain"
          />
          {/* left */}
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.25, duration: 0.25 },
            }}
            transition={{
              delay: 0.25,
              opacity: { ease: 'easeInOut' },
            }}
            src="/assets/images/sign-stamp-left-big.png"
            alt="sign-stamp"
            className="hidden lg:block left-[2.125rem] absolute bottom-[2.125rem]"
          />
          {/* right */}
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.25 },
            }}
            transition={{
              duration: 0.25,
              opacity: { ease: 'easeInOut' },
            }}
            src="/assets/images/sign-stamp-right-big.png"
            alt="sign-stamp"
            className="hidden lg:block right-[1.63625rem] absolute bottom-[10.134375rem]"
          />
        </div>
      </div>
    </>
  );
}

export default SignStampPage;
