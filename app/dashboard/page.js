import React from "react";

import dynamic from 'next/dynamic'
 
const Dashboard = dynamic(() => import('./../../components/dashboard/Dashboard'), {
  ssr: false,
})


function DashboardPage() {
  return (
    <div>
        <Dashboard/>
    </div>
  )
}

export default DashboardPage;