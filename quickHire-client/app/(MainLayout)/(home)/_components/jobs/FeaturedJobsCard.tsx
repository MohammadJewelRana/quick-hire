import Image from "next/image";
import Link from "next/link";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  category: string;
}

/* Limit text length */
const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/* Category Color System (same as previous tag style logic) */
const getCategoryStyle = (category: string) => {
  switch (category?.toLowerCase()) {
    case "finance":
      return "bg-emerald-100 text-emerald-600";
    case "design":
      return "bg-purple-100 text-purple-600";
    case "engineering":
      return "bg-blue-100 text-blue-600";
    case "marketing":
      return "bg-pink-100 text-pink-600";
    case "hr":
      return "bg-orange-100 text-orange-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Link href={`/jobs/${job._id}`} className="block h-full">
      <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

        {/* Top */}
        <div className="flex items-center justify-between mb-5">
          <Image
            src="/images/logos/company.png"
            alt={job.company}
            width={40}
            height={40}
          />

          <span className="text-xs px-3 py-1 border border-indigo-400 text-indigo-600 rounded-sm">
            Full Time
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-800 mb-1">
          {job.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {job.company} • {job.location}
        </p>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {truncateText(job.description, 90)}
        </p>

        <div className="mt-auto pt-4">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getCategoryStyle(job.category)}`}>
            {job.category}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default JobCard;