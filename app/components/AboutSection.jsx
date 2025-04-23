export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white max-w-[1200px] mx-auto">
      {/* Text Section */}
      <div className="flex-1 space-y-6 max-w-xl">
        <h2 className="text-6xl font-bold text-black">ABOUT</h2>
        {/* <div className="w-0.5 h-10 bg-gray-400 relative"> */}
          <div className="">
            <div className="md:flex hidden justify-start items-center ">
              <img
                src="https://res.cloudinary.com/dcwq74lfg/image/upload/v1745408643/brand/Big%20Oil/test/logos/e7c9a7ba6249b876fe34c5403caeda9c.svg"
                alt="arrow"
              />
            </div>
          </div>
        {/* </div> */}
        <p className="text-gray-700 text-lg leading-relaxed">
          At Batch, we bridge the gap between the physical and digital worlds,
          transforming everyday products into immersive, interactive
          experiences. Our innovative platform enables brands to connect with
          their customers in real time—seamlessly, securely, and impactfully.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-xl">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745418310/brand/Big%20Oil/test/logos/7814755d24e04277312912f4a1a52175.png" // Replace this with your actual image path
            alt="Person working"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
