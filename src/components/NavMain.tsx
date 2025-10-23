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
                  // Many safety overrides: force text & background for hover and open states
                  className={`
                    text-[#FFF9F0] transition-colors
                    hover:bg-[#0A4C8A]! hover:text-white!

                    /* open state possibilities */
                    data-[state=open]:bg-[#063A73]! data-[state=open]:text-white!
                    data-[open="true"]:bg-[#063A73]! data-[open="true"]:text-white!
                    data-[collapsed="false"]:bg-[#063A73]! data-[collapsed="false"]:text-white!
                    aria-expanded:bg-[#063A73]! aria-expanded:text-white!

                    /* collapsed-icon mode (if used) */
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
                      <SidebarMenuSubButton
                        asChild
                        className={`
                          text-[#FFF9F0] transition-colors
                          hover:bg-[#0A4C8A]! hover:text-white!

                          /* also ensure subitems don't inherit a parent hover wrongly */
                          data-[state=open]:bg-transparent! data-[state=open]:text-[#FFF9F0]!
                          aria-expanded:bg-transparent! aria-expanded:text-[#FFF9F0]!
                        `}
                      >
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
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
