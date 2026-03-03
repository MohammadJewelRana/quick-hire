interface Props {
  title: string;
  jobs: number;
  icon: React.ReactNode;
  active?: boolean;
}

const CategoryCard = ({ title, jobs, icon, active }: Props) => {
  return (
    <div
      className={`
      group border rounded-md transition-all duration-300 cursor-pointer
      ${
        active
          ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
          : "bg-white border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-lg"
      }
    `}
    >
      {/* 🔹 Mobile Layout */}
      <div className="flex items-center justify-between px-5 py-4 md:hidden">
        <div className="flex items-center gap-4">
          <div
            className={`text-xl ${
              active ? "text-white" : "text-indigo-600 group-hover:text-white"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-[16px] font-bold">{title}</h3>
            <p
              className={`text-sm ${
                active
                  ? "text-indigo-100"
                  : "text-gray-500 group-hover:text-indigo-100"
              }`}
            >
              {jobs} jobs available
            </p>
          </div>
        </div>
        <span className="text-lg">→</span>
      </div>

      {/* 🔹 Desktop Layout (UNCHANGED FROM YOUR ORIGINAL) */}
      <div className="hidden md:block p-7">
        <div
          className={`text-3xl mb-6 ${
            active ? "text-white" : "text-indigo-600 group-hover:text-white"
          }`}
        >
          {icon}
        </div>

        <h3 className="text-[18px] font-bold mb-1">{title}</h3>

        <p
          className={`text-sm ${
            active
              ? "text-indigo-100"
              : "text-gray-500 group-hover:text-indigo-100"
          }`}
        >
          {jobs} jobs available →
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;