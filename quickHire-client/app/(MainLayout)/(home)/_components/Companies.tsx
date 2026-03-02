import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Vodafone", src: "/images/logos/vodafone.png" },
  { name: "Intel", src: "/images/logos/intel.png" },
  { name: "Tesla", src: "/images/logos/tesla.png" },
  { name: "AMD", src: "/images/logos/amda.png" },
  { name: "Talkit", src: "/images/logos/talkit.png" },
];

const Companies = () => {
  return (
    <section className="bg-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Text */}
        <p className="text-gray-400 mb-10">Companies we helped grow</p>

        {/* Logo Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center grayscale hover:grayscale-0 transition"
            >
              <Image
                src={company.src}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Divider Space */}
        {/* <div className="mt-20 flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Explore by <span className="text-[#3B82F6]">category</span>
          </h2>

          <Link
            href="#"
            className="text-indigo-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            Show all jobs →
          </Link>
        </div> */}


      </div>
    </section>
  );
};

export default Companies;
