import { motion } from 'motion/react';
import Content from '../components/content/content';

function AdvancedFiltersPage() {
  return (
    <>
      <Content
        subtitle="Advanced Filters"
        heroText="Unique Filters"
        description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
        buttonText="Learn More"
      />
      {/* Image Section */}
      <div className="w-full flex lg:items-end justify-center items-end lg:-order-1 flex-1 lg:h-[35rem] overflow-hidden relative">
        {/* mobile */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 10 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/advanced-filters-mid-big.png"
          alt="advanced-filters"
          className="object-contain relative min-w-[15.27573109rem] w-[15.27573109rem] lg:hidden block"
        />
        {/*  */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1
           }}
          transition={{
            delay: 0.25 * 2,
            duration: .5,
            ease: 'easeInOut',
          }}
          src="/assets/images/advanced-filters-left-big.png"
          alt="advanced-filters"
          className="object-contain lg:hidden block absolute left-[54px] bottom-[2.5rem] w-[1.77181017rem]"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .5,
            ease: 'easeInOut',
            delay: 0.25 * 3,
          }}
          src="/assets/images/advanced-filters-right-big.png"
          alt="advanced-filters"
          className="object-contain lg:hidden block absolute right-[51px] bottom-[2.5rem] w-[1.77181017rem]"
        />


        {/* desktop */}
        <motion.img
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          src="/assets/images/advanced-filters-mid-big.png"
          alt="advanced-filters"
          className="object-contain relative min-w-[38.125rem] w-[38.125rem] h-[35rem] hidden lg:block"
        />
        {/*  */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ 

            opacity: 1
           }}
          transition={{
            delay: 0.25 * 2,
            duration: .5,
            ease: 'easeInOut',
          }}
          src="/assets/images/advanced-filters-left-big.png"
          alt="advanced-filters"
          className="object-contain hidden lg:block absolute left-[9.75rem] bottom-[2.5rem]"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .5,
            ease: 'easeInOut',
            delay: 0.25 * 3,
          }}
          src="/assets/images/advanced-filters-right-big.png"
          alt="advanced-filters"
          className="object-contain hidden lg:block absolute right-[9.9375rem] bottom-[2.5rem]"
        />
      </div>
    </>
  );
}

export default AdvancedFiltersPage;
