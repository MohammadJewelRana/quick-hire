import Footer from "../components/nav&footer/Footer";
import Navbar from "../components/nav&footer/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
