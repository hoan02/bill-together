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
import { useRouter } from "next/navigation";

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
import { useUserStore } from "@/store/user-store";

interface Organization {
  id: string;
  name: string;
  logo?: string;
  metadata?: {
    plan?: string;
  };
}

// Navigation items cho mỗi tổ chức
const getNavItems = (organizationId: string) => [
  {
    title: "Tổng quan",
    url: `/organizations/${organizationId}`,
    icon: LayoutDashboard,
  },
  {
    title: "Hoá đơn",
    url: `/organizations/${organizationId}/bills`,
    icon: ReceiptText,
    items: [
      {
        title: "Tất cả hoá đơn",
        url: `/organizations/${organizationId}/bills`,
      },
      {
        title: "Thêm hoá đơn",
        url: `/organizations/${organizationId}/bills/new`,
      },
    ],
  },
  {
    title: "Thành viên",
    url: `/organizations/${organizationId}/members`,
    icon: Users,
  },
  {
    title: "Báo cáo",
    url: `/organizations/${organizationId}/reports`,
    icon: BarChart3,
    items: [
      {
        title: "Tổng kết theo tháng",
        url: `/organizations/${organizationId}/reports/monthly`,
      },
      {
        title: "Theo thành viên",
        url: `/organizations/${organizationId}/reports/members`,
      },
      {
        title: "Theo hoá đơn",
        url: `/organizations/${organizationId}/reports/bills`,
      },
    ],
  },
  {
    title: "Cài đặt tổ chức",
    url: `/organizations/${organizationId}/settings`,
    icon: Settings2,
    items: [
      {
        title: "Thông tin chung",
        url: `/organizations/${organizationId}/settings/general`,
      },
      {
        title: "Mã mời",
        url: `/organizations/${organizationId}/settings/invite`,
      },
      {
        title: "Phân quyền",
        url: `/organizations/${organizationId}/settings/roles`,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const { user, organizations } = useUserStore();

  // Khởi tạo activeOrg từ organizations
  const [activeOrg, setActiveOrg] = React.useState<Organization | null>(null);

  // Effect để set activeOrg khi organizations thay đổi
  React.useEffect(() => {
    if (organizations.length > 0 && !activeOrg) {
      setActiveOrg(organizations[0]);
    }
  }, [organizations, activeOrg]);

  // Chuyển đổi organizations từ DB thành định dạng cho TeamSwitcher
  const orgItems = organizations.map((org: Organization) => ({
    id: org.id,
    name: org.name,
    logo: GalleryVerticalEnd, // Sử dụng icon mặc định
    plan: org.metadata?.plan || "Free",
  }));

  // Lấy navigation items cho tổ chức đang active
  const navItems = activeOrg ? getNavItems(activeOrg.id) : [];

  // Xử lý khi chuyển đổi tổ chức
  const handleOrgChange = (orgId: string) => {
    const newOrg = organizations.find((org: Organization) => org.id === orgId);
    if (newOrg) {
      setActiveOrg(newOrg);
      router.push(`/organizations/${orgId}`);
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher
          teams={orgItems}
          onTeamChange={handleOrgChange}
          activeTeamId={activeOrg?.id}
        />
      </SidebarHeader>
      {organizations.length > 0 && (
        <SidebarContent>
          <NavMain items={navItems} />
        </SidebarContent>
      )}
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
