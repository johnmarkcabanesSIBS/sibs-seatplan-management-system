import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-gray-200 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) bg-white text-gray-800">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4 bg-gray-300"
          />
        </div>

        {/* Center Section (Search Bar) */}
        <div className="flex justify-center flex-1">
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full bg-white border border-[#54D4D2] text-gray-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#54D4D2]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 font-semibold text-lg text-[#042C51]">
          SiBS
        </div>
      </div>
    </header>
  )
}
