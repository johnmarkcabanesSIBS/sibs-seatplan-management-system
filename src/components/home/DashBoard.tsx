"use client"

import { ChartBarLabel } from "@/components/ChartBarLabel"

const DashBoard = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-4 text-center leading-tight">
        Dashboard
      </h2>
      <ChartBarLabel />  
      {/* You can add more dashboard widgets here later */}
    </div>
  )
}

export default DashBoard
