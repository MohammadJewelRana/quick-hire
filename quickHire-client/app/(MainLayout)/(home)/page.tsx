import Banner from "./_components/Banner";
import Categories from "./_components/Catrgories/Category";
import Companies from "./_components/Companies";
import Hero from "./_components/Hero";

const page = () => {
  return (
    <div>
      <Hero />

      <div className="  bg-white">
        <Companies />
        <Categories/>
        <Banner/>
      </div>
    </div>
  );
};

export default page;
