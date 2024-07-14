import Sidebar from "./../../components/dashboard/Sidebar";
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(()=> import('./../../components/auth/PrivateRoute'), {
  ssr: false
})

function DashboardLayoutPage({ children }) {
  return (
    <PrivateRoute>
      <div className="container">
        <Sidebar className='w-100 ' />
        <div className=" w-100 "> 
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayoutPage;

