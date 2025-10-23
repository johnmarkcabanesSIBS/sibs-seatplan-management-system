"use client"

import { AppSidebar } from "@/components/AppSidebar"
import { SiteHeader } from "@/components/SiteHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import RightWing from "@/components/RightWing"

export default function Page() {
  return (
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
              <RightWing />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
