// components/common/SectionHeading.tsx

import Link from "next/link";

interface Props {
  title: string;
  highlight: string;
  link?: string;
}

export default function SectionHeading({ title, highlight, link }: Props) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
      <h2 className="text-[28px] md:text-[36px] font-bold text-[#1F2937]">
        {title}{" "}
        <span className="text-[#3B82F6] font-bold">
          {highlight}
        </span>
      </h2>

      {link && (
        <Link
          href={link}
          className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          Show all jobs →
        </Link>
      )}
    </div>
  );
}