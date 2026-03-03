import Image from "next/image";

const Banner = () => {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-sm">
          {/* Background Image */}
          <Image
            src="/images/banner/bgBanner.png"
            alt="background"
            fill
            className="object-cover"
            priority
          />

          {/* Content Layer */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center px-8 lg:px-12 pt-4 lg:pt-16 lg:min-h-[420px]">
            {/* LEFT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-[30px] md:text-[48px] font-bold leading-tight mb-3 lg:mb-6">
                Start posting <br className="hidden lg:block" />
                jobs today
              </h2>

              <p className="text-indigo-100 text-md mb-6">
                Start posting jobs for only $10.
              </p>

              <button className="bg-white text-indigo-600 px-8 py-3 font-semibold rounded-sm w-full lg:w-auto hover:bg-gray-100 transition">
                Sign Up For Free
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end items-end mt-12 lg:mt-0">
              <Image
                src="/images/banner/dashboard.png"
                alt="dashboard"
                width={650}
                height={420}
                className="object-contain  -mb-6"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
