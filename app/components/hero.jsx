export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-black text-white"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745385713/brand/Big%20Oil/test/logos/35cd398791395ee8010ad4d003913ef2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between md:py-[50px] pl-[121px] pr-[5px] md:px-[100px] gap-10">
        <div className="flex-1"></div>

        <div className="flex-1">
          <div className="hidden flex-col items-end md:flex">
            <ul className="space-y-2 text-sm text-gray-300 w-[50%]">
              {[
                "1. Brand First Technology Platform",
                "2. About",
                "3. Meet Our Team",
                "4. Instant Engagement",
                "5. Limitless Possibilities",
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{item}</span>
                  <span className="transform rotate-45">&rarr;</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mt-10 flex flex-row gap-10 items-stretch">
            <div className="flex items-stretch">
              <img
                src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745388917/brand/Big%20Oil/test/logos/995f9cd64e7a46288120260fd71aa961.svg"
                alt="arrow"
                className="h-full w-[auto] object-cover"
              />
            </div>

            <div className="flex flex-col justify-start">
              <h2 className="md:text-[64px] text-[32px] font-bold leading-none">
                BRAND FIRST
              </h2>
              <h3 className="md:text-[32px] text-[16px] font-light">TECHNOLOGY PLATFORM</h3>
              <p className="md:text-[20px] text-[12px] text-gray-300 mb-4">
                We transform everyday products into immersive digital
                experiences, seamlessly connecting brands with their customers.
              </p>
              <p className="md:text-[20px] text-[12px] text-gray-300 mb-4">
                With cutting-edge technology, effortless interactions, and
                built-in authenticity verification, Batch helps brands build
                trust, drive engagement, and create lasting connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="absolute md:bottom-40 bottom-15 md:left-10 left-[95px]  right-0 flex justify-start">
        <div className="flex gap-10 text-sm font-semibold text-gray-300 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <span className="border-l-2 pl-2 border-white">
              100+ Brands Empowered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-l-2 pl-2 border-white">
              Seamless in 50+ Countries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
