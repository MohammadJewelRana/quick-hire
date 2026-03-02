"use client";

import SectionHeading from "@/app/components/SectionHeading";
import JobCard from "./FeaturedJobsCard";
import { useGetAllJobs } from "@/app/hooks/job.hook";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedJobs = () => {
  const { jobs, isLoading, isError } = useGetAllJobs();

  return (
    <section className="py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured" highlight="jobs" link="#" />

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-16 text-gray-500">Loading jobs...</div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-16 text-red-500">
            Failed to load jobs
          </div>
        )}

        {/* Desktop */}
        {!isLoading && !isError && (
          <>
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {jobs.slice(0, 8).map((job: any) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden mt-6">
              <Swiper
                modules={[Pagination]}
                spaceBetween={12}
                slidesPerView={1.1}
                // pagination={{ clickable: true }}
              >
                {jobs.map((job: any) => (
                  <SwiperSlide key={job._id} className="flex">
                    <JobCard job={job} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
