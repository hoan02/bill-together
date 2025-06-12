"use client";

import {
  Users,
  ReceiptText,
  BarChart3,
  Settings2,
  GalleryVerticalEnd,
  Landmark,
  PlusCircle,
  LayoutDashboard,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/dashboard/sidebar/nav-main";
import { NavProjects } from "@/components/dashboard/sidebar/nav-projects";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";
import { TeamSwitcher } from "@/components/dashboard/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const organizations = [
  {
    name: "Team Ăn nhậu Quận 1",
    logo: GalleryVerticalEnd,
    plan: "Free",
  },
  {
    name: "Gia đình 4 người",
    logo: Landmark,
    plan: "Pro",
  },
];

const navMain = [
  {
    title: "Tổng quan",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Hoá đơn",
    url: "/bills",
    icon: ReceiptText,
    items: [
      {
        title: "Tất cả hoá đơn",
        url: "/bills",
      },
      {
        title: "Thêm hoá đơn",
        url: "/bills/new",
      },
    ],
  },
  {
    title: "Thành viên",
    url: "/members",
    icon: Users,
  },
  {
    title: "Báo cáo",
    url: "/reports",
    icon: BarChart3,
    items: [
      {
        title: "Tổng kết theo tháng",
        url: "/reports/monthly",
      },
      {
        title: "Theo thành viên",
        url: "/reports/members",
      },
      {
        title: "Theo hoá đơn",
        url: "/reports/bills",
      },
    ],
  },
  {
    title: "Cài đặt tổ chức",
    url: "/settings",
    icon: Settings2,
    items: [
      {
        title: "Thông tin chung",
        url: "/settings/general",
      },
      {
        title: "Mã mời",
        url: "/settings/invite",
      },
      {
        title: "Phân quyền",
        url: "/settings/roles",
      },
    ],
  },
];

const projects = [
  {
    name: "Nhóm cuối tuần",
    url: "/organizations/weekend",
    icon: PlusCircle,
  },
  {
    name: "Chuyến đi Đà Lạt",
    url: "/organizations/dalat-trip",
    icon: PlusCircle,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={organizations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
