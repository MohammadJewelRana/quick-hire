import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8FD] overflow-hidden w-full">

      {/* Pattern Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/pattern.png"
          alt="pattern"
          fill
          className="object-cover object-right opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Discover <br />
              more than <br />
              <span className="text-[#3B82F6] relative inline-block">
                5000+ Jobs
              </span>
            </h1>

            {/* Scribble Underline */}
            <div className="mt-3 mb-6">
              <Image
                src="/images/hero/underline.svg"
                alt="underline"
                width={180}
                height={20}
              />
            </div>

            <p className="text-gray-500 text-lg mb-8">
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>

            {/* Search Box */}
            <div className="bg-white shadow-2xl rounded-md p-3 flex flex-col md:flex-row items-center gap-3">

              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 outline-none text-gray-600 px-3 py-2"
              />

              <div className="hidden md:block h-6 w-px bg-gray-200"></div>

              <select className="outline-none text-gray-600 px-3 py-2">
                <option>Florence, Italy</option>
              </select>

              <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-full md:w-auto">
                Search my job
              </button>

            </div>

            <p className="text-sm text-gray-400 mt-4">
              Popular : UI Designer, UX Researcher, Android, Admin
            </p>

          </div>

          {/* RIGHT PERSON IMAGE (Desktop Only) */}
          <div className="hidden lg:flex justify-end relative">

            <Image
              src="/images/hero/person.png"
              alt="person"
              width={500}
              height={650}
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}