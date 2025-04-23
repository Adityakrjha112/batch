import React from 'react';

const InstantEngagement = () => {
  return (
    <section className="px-6 py-12 md:py-10 lg:px-20 bg-white max-w-[1200px] mx-auto">
        <h2 className="md:text-[96px] text-[36px] font-bold mb-6 md:text-start text-black text-center">
            Instant Engagement
          </h2>

          <div className="md:hidden flex">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745394738/brand/Big%20Oil/test/logos/444f7b31d528261052b6fbb462a97ab2.png"
              alt="Engagement Scan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:hidden flex justify-center my-[10px] items-center">
        <img src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745408643/brand/Big%20Oil/test/logos/e7c9a7ba6249b876fe34c5403caeda9c.svg" alt="arrow" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          
          <p className="text-gray-700 text-[20px] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Through our cutting-edge solutions—like NFC tags and holographic labels—customers can instantly engage with a product, verify authenticity, and access exclusive content with a simple tap or scan. No app downloads, no friction—just seamless interactions that enhance brand trust and loyalty. Whether it’s unlocking product details, claiming ownership, earning rewards, or participating in interactive challenges, we help brands turn every product into a dynamic touchpoint.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:flex-1 md:flex hidden">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745394738/brand/Big%20Oil/test/logos/444f7b31d528261052b6fbb462a97ab2.png"
              alt="Engagement Scan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantEngagement;
