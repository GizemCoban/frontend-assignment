import { motion } from 'motion/react';
import Content from '../components/content/content';

function BatchScanningPage() {
  return (
    <>
      <Content
        subtitle="Batch Scanning"
        heroText="Multiple Page Scan"
        description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
        buttonText="Learn More"
      />
      {/* Image Section */}
      <div className="flex lg:items-end justify-center items-end lg:-order-1 flex-1 max-h-[23.40983582rem] h-[23.40983582rem] lg:h-[35rem] lg:max-h-[35rem] overflow-hidden relative">
        {/* mobile */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 10 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/batch-scanning-big.png"
          alt="document-scanner"
          className="object-contain relative min-w-[15.66741848rem] w-[15.66741848rem]  lg:hidden block"
        />
        {/*  */}
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: '-70px', x: '-50%' }}
          transition={{
            delay: 0.25 + 0.25 * 2,
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[10.32476807rem] w-[10.32476807rem]  lg:hidden block left-2/4 absolute "
        />
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: '-40px', x: '-50%' }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.25 + 0.25 * 3,
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[11.4193697rem] w-[11.4193697rem]  lg:hidden block left-2/4 absolute"
        />
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: '-10px', x: '-50%' }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.25 + 0.25 * 4,
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[12.11836815rem] w-[12.11836815rem]  lg:hidden block left-2/4 absolute"
        />

        {/* desktop */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/batch-scanning-big.png"
          alt="document-scanner"
          className="object-contain relative min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block"
        />
        {/*  */}
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.25 * 2,
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[15.43653965rem] w-[15.43653965rem] hidden lg:block left-2/4 absolute bottom-[80px] -translate-x-2/4"
        />
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.25 * 3,
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[17.07307816rem] w-[17.07307816rem] hidden lg:block left-2/4 absolute bottom-[40px] -translate-x-2/4"
        />
        <motion.img
          initial={{ y: '150%', x: '-50%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.25 * 4,
          }}
          src="/assets/images/batch-scanning-mid-big.png"
          alt="document-scanner"
          className="object-contain min-w-[18.1181488rem] w-[18.1181488rem] hidden lg:block left-2/4 absolute bottom-0 -translate-x-2/4"
        />
      </div>
    </>
  );
}

export default BatchScanningPage;
