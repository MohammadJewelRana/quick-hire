import SectionHeading from "@/app/components/SectionHeading";
import {
  FaPaintBrush,
  FaChartBar,
  FaBullhorn,
  FaWallet,
  FaDesktop,
  FaCode,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Explore by" highlight="category" link="#" />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard title="Design" jobs={235} icon={<FaPaintBrush />} />

          <CategoryCard title="Sales" jobs={756} icon={<FaChartBar />} />

          <CategoryCard title="Marketing" jobs={140} icon={<FaBullhorn />} />

          <CategoryCard title="Finance" jobs={325} icon={<FaWallet />} />

          <CategoryCard title="Technology" jobs={436} icon={<FaDesktop />} />

          <CategoryCard title="Engineering" jobs={542} icon={<FaCode />} />

          <CategoryCard title="Business" jobs={211} icon={<FaBriefcase />} />

          <CategoryCard title="Human Resource" jobs={346} icon={<FaUsers />} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
