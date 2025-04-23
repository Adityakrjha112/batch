import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white p-8 text-center max-w-[1200px] mx-auto">
      <h2 className="md:text-[96px] text-[30px] font-semibold text-teal-500 border-b border-teal-200 border-t pt-4 mt-8 pb-4 mb-8">
        HOW DOES IT WORK?
      </h2>
      <div className="flex-ro md:flex-row justify-between items-center mt-8 text-sm text-gray-700 px-4 md:hidden sm:flex">
        <p className="md:max-w-sm mb-4 md:mb-0">
          We use NFC chips to scan, tap and earn rewards. You can find them on our products.
        </p>
        <p className="md:max-w-sm">
          Scan or tap the chip with your phone to get exclusive rewards and earn points.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto md:hidden flex">
        <img
          src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745410658/brand/Big%20Oil/test/logos/f75afc2aa9cadd1d616007c48f493054.png"
          alt="How It Works"
          className="w-full"
        />
      </div>
      <div className="relative max-w-4xl mx-auto hidden md:flex">
        <img
          src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745397133/brand/Big%20Oil/test/logos/26be71e8a144429f2ee1d75be718a03e.png"
          alt="How It Works"
          className="w-full"
        />
      </div>

      <div className="justify-start items-center mr-[120px] md:flex hidden">
        <img src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745408643/brand/Big%20Oil/test/logos/e7c9a7ba6249b876fe34c5403caeda9c.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default HowItWorks;
