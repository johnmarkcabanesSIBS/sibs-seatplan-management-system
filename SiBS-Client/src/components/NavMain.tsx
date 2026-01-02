"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#FFF9F0]"></SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`
                    text-[#FFF9F0] transition-colors
                    hover:bg-[#0A4C8A]! hover:text-white!
                    data-[state=open]:bg-[#063A73]! data-[state=open]:text-white!
                    data-[open="true"]:bg-[#063A73]! data-[open="true"]:text-white!
                    data-[collapsed="false"]:bg-[#063A73]! data-[collapsed="false"]:text-white!
                    aria-expanded:bg-[#063A73]! aria-expanded:text-white!
                    data-[collapsible=icon]:hover:bg-[#0A4C8A]!
                    data-[collapsible=icon]:text-white!
                  `}
                >
                  {item.icon && <item.icon className="text-[#FFF9F0] transition-colors" />}
                  <span className="text-[#FFF9F0] group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                  <ChevronRight
                    className="
                      ml-auto text-[#FFF9F0] transition-transform duration-200
                      group-data-[state=open]/collapsible:rotate-90
                      group-data-[collapsible=icon]:hidden
                    "
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild
                        className={`
                          text-[#FFF9F0] transition-colors
                          hover:bg-[#0A4C8A]! hover:text-white!
                          data-[state=open]:bg-transparent! data-[state=open]:text-[#FFF9F0]!
                          aria-expanded:bg-transparent! aria-expanded:text-[#FFF9F0]!
                        `}
                      >
                        <NavLink
                          to={subItem.url}
                          onClick={(e) => e.stopPropagation()} // prevent collapsing
                          className={({ isActive }) =>
                            `block w-full h-full ${isActive ? "bg-[#063A73] text-white" : ""}`
                          }
                        >
                          <span>{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
