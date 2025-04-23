export default function TrustedClients() {
  const logos = [
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394028/brand/Big%20Oil/test/logos/fadbd5292fdd8d51c7bdb5e1587d4ccf.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394068/brand/Big%20Oil/test/logos/88ec95c49533d5d12f5651f06dad9865.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394085/brand/Big%20Oil/test/logos/e2af4e5487b8af4abd610e2ebca9d526.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394102/brand/Big%20Oil/test/logos/b80374347cd2f0563e3da49cc70fc946.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394119/brand/Big%20Oil/test/logos/7cdffb030c2fdad14b29a301511db2f4.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394136/brand/Big%20Oil/test/logos/2b4d6f1a3c4a2544dc53bf5be5c53970.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394153/brand/Big%20Oil/test/logos/eb547938d1ed77db7bdebdda0599befc.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394172/brand/Big%20Oil/test/logos/727af6d46afe08fcbe90f91387b53221.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394190/brand/Big%20Oil/test/logos/4eb5798e3dfe44543a2f8810cc7a13e2.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394208/brand/Big%20Oil/test/logos/2d65a0c74b1a3f181d41a3640b4b9a92.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745394229/brand/Big%20Oil/test/logos/82249902d4c76f52cd9494221fa4e8c1.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
    "https://res.cloudinary.com/dcwq74lfg/image/upload/v1745393992/brand/Big%20Oil/test/logos/700ca569091595a64b78523bcc38b462.svg",
  ];

  return (
    <section className="bg-white py-10 px-4 text-center mx-w-[1200px] mx-auto">
      <div className="flex">
      <div className="md:w-[90%] w-full">
        <h2 className="md:text-[36px] text-[32px] font-[600] mb-2 text-black">
          TRUSTED BY OUR CLIENTS
        </h2>
        <p className="text-gray-500 mb-10 md:text-[24px] text-[12px] md:w[100%] mx-auto w-[65%]">
          Hear from those who trust us—real experiences, real results!
        </p>
      </div>

      <div>
        <div className="md:flex hidden items-center justify-center w-16 h-16 bg-teal-300 rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
      </div>
      

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[140px]"
          >
            <img
              src={`${logo}`}
              alt={index}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="md:flex hidden justify-end items-center mr-[120px]">
        <img src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745408643/brand/Big%20Oil/test/logos/e7c9a7ba6249b876fe34c5403caeda9c.svg" alt="arrow" />
      </div>
    </section>
  );
}
