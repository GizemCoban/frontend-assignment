import { motion } from 'motion/react';
import Content from '../components/content/content';

function ExportSharePage() {
  return (
    <>
      <Content
        subtitle="export & share"
        heroText="All-Round Conversion"
        description="Export your scans as PDF,JPG,ZIP,TXT and Word."
        buttonText="Learn More"
      />
      {/* Image Section */}
      <div className="w-full flex lg:items-end justify-center items-end lg:-order-1 flex-1 min-h-[22.72130966rem] h-[22.72130966rem] lg:h-[35rem] overflow-hidden relative">
        {/* mobile */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 10 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/export-share-mid-big.png"
          alt="export-share"
          className="object-contain relative min-w-[14.82644749rem] w-[14.82644749rem] lg:hidden block"
        />
        {/*  */}
        <motion.img
          initial={{ y: '100%', x: 1, rotate: '9.61deg' }}
          animate={{ y: '-2.018125rem', x: '-140px' }}
          transition={{
            delay: 0.25 * 2,
            duration: 0.5,
            ease: 'easeInOut',
          }}
          src="/assets/images/export-share-big-left.png"
          alt="export-share"
          className="object-contain lg:hidden block absolute"
        />

        <motion.img
          initial={{ y: '100%', x: 1 }}
          animate={{ y: '-2.018125rem', x: '-100px' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 3,
          }}
          src="/assets/images/export-share-big-pdf.png"
          alt="export-share"
          className="object-contain lg:hidden block absolute w-[110px]"
        />

        <motion.img
          initial={{ y: '100%', x: '-50%' }}
          animate={{ y: '-4.018125rem', x: '-50%' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 4,
          }}
          src="/assets/images/export-share-big-jpg.png"
          alt="export-share"
          className="object-contain lg:hidden block absolute left-1/2 w-[90px]"
        />

        <motion.img
          initial={{ y: '100%', x: 1 }}
          animate={{ y: '-2.018125rem', x: '100px' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 5,
          }}
          src="/assets/images/export-share-big-txt.png"
          alt="export-share"
          className="object-contain lg:hidden block absolute w-[110px]"
        />

        {/* desktop */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/export-share-mid-big.png"
          alt="export-share"
          className="object-contain relative min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block"
        />
        {/*  */}
        <motion.img
          initial={{ y: '200%', x: 1, rotate: '9.61deg' }}
          animate={{ y: '-2.018125rem', x: '-16.1875rem' }}
          transition={{
            delay: 0.25 * 2,
            duration: 0.5,
            ease: 'easeInOut',
          }}
          src="/assets/images/export-share-big-left.png"
          alt="export-share"
          className="object-contain hidden lg:block absolute"
        />

        <motion.img
          initial={{ y: '200%', x: 1 }}
          animate={{ y: '-2.018125rem', x: '-12.1875rem' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 3,
          }}
          src="/assets/images/export-share-big-pdf.png"
          alt="export-share"
          className="object-contain hidden lg:block absolute"
        />

        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '-6.018125rem', x: '-50%' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 4,
          }}
          src="/assets/images/export-share-big-jpg.png"
          alt="export-share"
          className="object-contain hidden lg:block absolute left-1/2"
        />

        <motion.img
          initial={{ y: '200%', x: 1 }}
          animate={{ y: '-2.018125rem', x: '12.1875rem' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.25 * 5,
          }}
          src="/assets/images/export-share-big-txt.png"
          alt="export-share"
          className="object-contain hidden lg:block absolute"
        />
      </div>
    </>
  );
}

export default ExportSharePage;
