import { motion } from 'motion/react';
import Content from '../components/content/content';

function DocumentScannerPage() {
  return (
    <>
      <Content
        subtitle="Document Scanner"
        heroText="Scan with Ease"
        description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
        buttonText="Learn More"
      />
      {/* Image Section */}
      <div className="flex lg:items-end justify-center items-end lg:-order-1 flex-1 min-h-[22.03278542rem] h-[22.03278542rem] lg:h-[35rem]">
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 0, transition: { duration: 1 } }}
          transition={{
            duration: 1,
            bottom: { ease: 'easeInOut' },
          }}
          src="/assets/images/document-scanner-big.png"
          alt="document-scanner"
          className="object-contain min-w-[24rem] w-[24rem] lg:w-[22.8488121rem] block lg:hidden"
        />
        <motion.img
          initial={{ bottom: '-100%' }}
          animate={{ bottom: 0, transition: { duration: 1 } }}
          transition={{
            duration: 1,
            bottom: { ease: 'easeInOut' },
          }}
          src="/assets/images/document-scanner-big.png"
          alt="document-scanner"
          className="relative min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block"
        />
      </div>
    </>
  );
}

export default DocumentScannerPage;
