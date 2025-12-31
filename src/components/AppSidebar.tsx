"use client";

import { Armchair, Home } from "lucide-react";

import { NavMain } from "@/components/NavMain";
import { NavUser } from "@/components/NavUser";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "John Mark Cabanes",
    email: "johnmark.cabanes@thesiblingssolutions.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      items: [
        { title: "Profile", url: "/profile" },
        { title: "Dashboard", url: "/dashboard" }
      ],
    },
    {
      title: "Seat Groups",
      url: "#",
      icon: Armchair,
      items: [
        { title: "Right Wing", url: "/right-wing" },
        { title: "Left Wing", url: "/left-wing" },
        { title: "IT Room", url: "/it-room" },
        { title: "Training Room", url: "/training-room" },
        { title: "Lobby", url: "/lobby" },
        { title: "Recruitment Area", url: "/recruitment-area" },
        { title: "TA and PE Cubicle", url: "/ta-and-pe-cubicle" },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#042C51] text-[#FFF9F0]">
      <SidebarHeader>
        <h1 className="text-2xl font-bold text-[#FFF9F0]">
          IT Seat Plan Management System
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
