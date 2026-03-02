"use client"

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#F5F7FB] overflow-hidden">

      {/* Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/hero/pattern.png"
          alt="pattern"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

     
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-white clip-diagonal z-10 hidden lg:block"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-28">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#1F2937] leading-[1.1]">
              Discover <br />
              more than <br />
              <span className="text-[#3B82F6] relative">
                5000+ Jobs
              </span>
            </h1>

            {/* Scribble Underline */}
            <div className="mt-4 mb-6">
              <Image
                src="/images/hero/underline.png"
                alt="underline"
                width={220}
                height={20}
              />
            </div>

            <p className="text-[#6B7280] text-lg mb-10">
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>

            {/* Search Box */}
            <div className="bg-white shadow-xl rounded-md p-4 flex flex-col md:flex-row items-center gap-4">

              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 outline-none text-gray-600 px-3 py-2"
              />

              <div className="hidden md:block w-px h-6 bg-gray-200"></div>

              <select className="outline-none text-gray-600 px-3 py-2">
                <option>Florence, Italy</option>
              </select>

              <button className="bg-[#4F46E5] text-white px-8 py-3 rounded-sm hover:bg-indigo-700 transition w-full md:w-auto">
                Search my job
              </button>

            </div>

            <p className="text-sm text-gray-400 mt-4">
              Popular : UI Designer, UX Researcher, Android, Admin
            </p>

          </div>

          {/* RIGHT PERSON IMAGE */}
          <div className="hidden lg:flex justify-end relative">

            <Image
              src="/images/hero/person.png"
              alt="person"
              width={520}
              height={650}
              className="object-contain relative z-30"
              priority
            />

          </div>

        </div>

      </div>

      {/* Diagonal clip-path style */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>

    </section>
  );
}