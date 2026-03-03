"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetAllJobs } from "@/app/hooks/job.hook";

export default function Hero() {
  const router = useRouter();

  const { jobs, isLoading } = useGetAllJobs();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    if (!search && !location) {
      setSuggestions([]);
      return;
    }

    const filtered = jobs.filter((job: any) => {
      const titleMatch = search
        ? job.title.toLowerCase().includes(search.toLowerCase())
        : true;

      const locationMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      return titleMatch && locationMatch;
    });

    setSuggestions(filtered.slice(0, 5));
  }, [search, location, jobs]);
  const handleSearch = () => {
    router.push(`/jobs?q=${search}&location=${location}`);
  };

  return (
    <section className="relative  bg-[#F5F7FB] overflow-hidden pt-24 lg:pt-[var(--navbar-height)] lg:h-[80vh] lg:min-h-[520px]">
      {/* Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/images/hero/pattern.png"
          alt="pattern"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Diagonal White Shape (Desktop Only) */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[350px] bg-white clip-diagonal z-10 hidden lg:block"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 items-center w-full gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-xl relative z-30">
            <h1 className="text-[42px] md:text-[64px] font-extrabold text-[#1F2937] leading-[1.1]">
              Discover <br />
              more than <br />
              <span className="text-[#3B82F6] inline-block">5000+ Jobs</span>
            </h1>

            {/* Underline */}
            <div className="mt-2 mb-6">
              <Image
                src="/images/hero/underline.png"
                alt="underline"
                width={300}
                height={40}
                priority
              />
            </div>

            <p className="text-[#6B7280] text-lg mb-8">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>

            {/* Search Box */}

            <div className="w-full max-w-2xl relative">
              <div className="bg-white shadow-2xl rounded-md p-5 flex flex-col md:flex-row items-center gap-4">
                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 outline-none text-gray-600 px-3 py-3 w-full"
                />

                <div className="hidden md:block w-px h-8 bg-gray-200"></div>

                {/* Location Input */}
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="outline-none text-gray-600 px-3 py-3 w-full md:w-auto"
                />
                <button
                  onClick={handleSearch}
                  className="bg-[#4F46E5] text-white px-8 py-3 rounded-sm hover:bg-indigo-700 transition w-full md:w-auto"
                  disabled
                >
                  Search my job
                </button>
              </div>

              {/* Suggestion Dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute bg-white shadow-lg w-full mt-2 rounded-md z-50">
                  {suggestions.map((job: any) => (
                    <div
                      key={job._id}
                      onClick={() => router.push(`/jobs/${job._id}`)}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {job.title} – {job.location}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-sm text-gray-400 mt-4 pb-4">
                Popular : UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex justify-end relative mt-10">
            <Image
              src="/images/hero/person.png"
              alt="person"
              width={520}
              height={550}
              className="object-contain relative z-30"
              priority
            />
          </div>
        </div>
      </div>

      {/* Clip Path */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}
