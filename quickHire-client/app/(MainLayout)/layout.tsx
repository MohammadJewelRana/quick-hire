import Footer from "../components/nav&footer/Footer";
import Navbar from "../components/nav&footer/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="  w-full   ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
