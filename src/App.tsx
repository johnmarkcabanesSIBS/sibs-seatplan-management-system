"use client"

import { AppSidebar } from "@/components/AppSidebar"
import { SiteHeader } from "@/components/SiteHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RightWing from "@/components/seatgroups/RightWing"
import LeftWing from "@/components/seatgroups/LeftWing"
import ItRoom from "@/components/seatgroups/ItRoom"
import TrainingRoom from "./components/seatgroups/TrainingRoom"
import Lobby from "./components/seatgroups/Lobby"
import RecruitmentArea from "./components/seatgroups/RecruitmentArea"
import TaAndPeCubicle from "./components/seatgroups/TaAndPeCubicle"
import DashBoard from "./components/home/DashBoard"
import Profile from "./components/home/Profile"

export default function Page() {
  return (
    <Router>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        {/* Sidebar hidden on small screens */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>

        <SidebarInset>
          <SiteHeader />

          {/* Main content */}
          <div className="flex flex-1 flex-col bg-white dark:bg-gray-900">
            <div className="@container/main flex flex-1 flex-col gap-2 md:gap-4 p-3 sm:p-4 md:p-6">
              <div className="flex flex-col items-center justify-center py-2 sm:py-4 md:py-6 overflow-x-auto">
                <Routes>
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/dashboard" element={<DashBoard/>} />
                  <Route path="/right-wing" element={<RightWing />} />
                  <Route path="/left-wing" element={<LeftWing />} />
                  <Route path="/it-room" element={<ItRoom />} />
                  <Route path="/training-room" element={<TrainingRoom />} />
                  <Route path="/lobby" element={<Lobby />} />
                  <Route path="/recruitment-area" element={<RecruitmentArea />} />
                  <Route path="/ta-and-pe-cubicle" element={<TaAndPeCubicle />} />
                </Routes>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Router>
  )
}
