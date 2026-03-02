import Image from "next/image";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  type: string;
  logo: string;
}

/* Limit text length */
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/* Tag Color System */
const getTagStyle = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "marketing":
      return "bg-green-100 text-green-600";
    case "design":
      return "bg-purple-100 text-purple-600";
    case "business":
      return "bg-orange-100 text-orange-600";
    case "technology":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-300 flex flex-col w-full h-full">
      {/* Top */}
      <div className="flex items-center justify-between mb-5">
        <Image
          src={"/images/logos/company.png"}
          alt={job.company}
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xs px-3 py-1 border border-indigo-400 text-indigo-600 rounded-sm">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-gray-800 mb-1">{job.title}</h3>

      <p className="text-sm text-gray-500 mb-3">
        {job.company} • {job.location}
      </p>

      {/* Description (Controlled height, less gap) */}
      <p className="text-sm text-gray-400 line-clamp-2 mb-4">
        {truncateText(job.description, 90)}
      </p>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full font-medium ${getTagStyle(
              tag,
            )}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
