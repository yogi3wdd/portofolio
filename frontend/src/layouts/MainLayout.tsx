import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow w-full">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;