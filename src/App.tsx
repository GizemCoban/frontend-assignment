import { motion } from 'motion/react';
import Content from './components/content/content';
import Options from './components/options/options';

function App() {
  return (
    <div className="lg:bg-[#F5F5F7] pb-16 pt-14 lg:pb-[12.5rem] lg:pt-[14.5625rem] h-dvh overflow-hidden bg-white">
      <div className="bg-white flex flex-col h-full [&>*]:max-w-screen-2xl [&>*]:mx-auto">
        <div className="lg:pt-[6.7rem] lg:h-[38.3125rem] flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between items-center lg:pl-[4.125rem] lg:pr-[8.25rem] overflow-hidden">
          <Content
            subtitle="Document Scanner"
            heroText="Scan with Ease"
            description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
            buttonText="Learn More"
          />
          {/* Image Section */}
          <div className="flex lg:items-end justify-center items-end lg:-order-1 flex-1 lg:h-[35rem]">
            <img
              src="/assets/images/document-scanner.png"
              alt="document-scanner"
              className="w-[14.3835144rem] lg:w-[22.8488121rem] block lg:hidden"
            />
            <motion.img
              initial={{ bottom: '-100%', position: 'relative' }}
              animate={{ bottom: 0, position: 'relative' }}
              transition={{
                duration: 1,
                bottom: { ease: "easeInOut" },
              }}
              src="/assets/images/document-scanner-big.png"
              alt="document-scanner"
              className="min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block"
            />
          </div>
        </div>
        <Options />
      </div>
    </div>
  );
}

export default App;
