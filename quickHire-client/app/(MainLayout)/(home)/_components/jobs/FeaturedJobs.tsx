"use client";

import SectionHeading from "@/app/components/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import JobCard from "./FeaturedJobsCard";

const dummyJobs = [
  {
    id: 1,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team grow.",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    logo: "/images/company/revolut.png",
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer.",
    tags: ["Design", "Business"],
    type: "Full Time",
    logo: "/images/company/dropbox.png",
  },
  {
    id: 3,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is hiring Customer Marketing Manager.",
    tags: ["Marketing"],
    type: "Full Time",
    logo: "/images/company/pitch.png",
  },
  {
    id: 4,
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is hiring Visual Designer.",
    tags: ["Design"],
    type: "Full Time",
    logo: "/images/company/blinkist.png",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass needs Product Designer.",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    logo: "/images/company/classpass.png",
  },
  {
    id: 6,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva hiring Lead Engineer.",
    tags: ["Design", "Business"],
    type: "Full Time",
    logo: "/images/company/canva.png",
  },
  {
    id: 7,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy hiring Brand Strategist.",
    tags: ["Marketing"],
    type: "Full Time",
    logo: "/images/company/godaddy.png",
  },
  {
    id: 8,
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter hiring Data Analyst.",
    tags: ["Technology"],
    type: "Full Time",
    logo: "/images/company/twitter.png",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-6 lg:py-10  ">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured" highlight="jobs" link="#" />

        {/* 🔥 Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {dummyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* 🔥 Mobile Swiper */}
        <div className="md:hidden mt-6">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            // pagination={{ clickable: true }}
            className="!pb-1"
          >
            {dummyJobs.map((job) => (
              <SwiperSlide key={job.id}>
                <JobCard job={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
