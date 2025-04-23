import React from "react";

const LimitlessPossibilities = () => {
  return (
    <>
      <h1 className="md:text-[96px] text-[36px] font-[600] mx-auto px-6 py-[20px]">
        Limitless Possibilities
      </h1>
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:py-[40px] max-w-[1200px] mx-auto bg-white">
        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745395196/brand/Big%20Oil/test/logos/202a2e6530416531ecea24ae9e097a4f.png"
            alt="Batch Visual"
            className="w-full h-full object-cover hidden md:block"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <div className="md:hidden flex items-start gap-4 max-w-3xl mx-auto p-4">
            {/* Arrow image */}
            <img
              src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745408643/brand/Big%20Oil/test/logos/e7c9a7ba6249b876fe34c5403caeda9c.svg"
              alt="Arrow"
              className="w-4 h-auto mt-1"
            />

            {/* Text content */}
            <p className="text-gray-800 text-base leading-relaxed">
              For gaming and digital-first brands, Batch takes engagement even
              further. Our system gamifies rewards, enabling customers to earn
              in-game assets, exclusive skins, or power-ups through product
              interactions. With built-in leaderboard challenges and
              social-sharing incentives, we help brands fuel viral engagement
              and build dedicated communities. Plus, our full integration with
              Unity ensures digital assets can extend beyond the physical realm.
            </p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-[20px] leading-relaxed mb-[40px] md:block hidden">
            For gaming and digital-first brands, Batch takes engagement even
            further. Our system gamifies rewards, enabling customers to earn
            in-game assets, exclusive skins, or power-ups through product
            interactions. With built-in leaderboard challenges and
            social-sharing incentives, we help brands fuel viral engagement and
            build dedicated communities. Plus, our full integration with Unity
            ensures digital assets can extend beyond the physical realm.
          </p>
          <img
            src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745395196/brand/Big%20Oil/test/logos/202a2e6530416531ecea24ae9e097a4f.png"
            alt="Batch Visual"
            className="w-full h-full object-cover block md:hidden"
          />
          <p className="md:text-[20px] text-[12px] leading-relaxed md:mb-[40px]">
            Batch is built for visionaries, disruptors, and master
            craftsmen—brands that don’t just follow trends but set them. We
            provide the tools to transform products into experiences, turning
            customer interactions into lasting connections.
          </p>
          <p className="italic md:text-[47px] text-[24px] font-medium text-black">
            Let’s build something unforgettable.
          </p>
        </div>
      </section>
    </>
  );
};

export default LimitlessPossibilities;
