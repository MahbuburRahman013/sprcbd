import Sidebar from "./../../components/dashboard/Sidebar";
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(()=> import('./../../components/auth/PrivateRoute'), {
  ssr: false
})

function DashboardLayoutPage({ children }) {
  return (
    <PrivateRoute>
      <div className="d-flex  min-vh-100 overflow-auto">
        <Sidebar className='w-25 ' />
        <div className="p-3 w-75"> 
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayoutPage;

