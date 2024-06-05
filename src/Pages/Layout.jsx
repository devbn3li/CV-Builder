import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


function Layout() {
  return (
    <div className="flex justify-center flex-col max-w-screen overflow-hidden bg-[#111e41]">    
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;