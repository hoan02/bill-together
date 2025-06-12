"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "../../custom-ui/theme-toggle";

export function Header() {
  const pathname = usePathname();

  const breadcrumbMap: Record<string, { label: string; href?: string }[]> = {
    "/dashboard": [{ label: "Tổng quan" }],
    "/bills": [
      { label: "Hoá đơn", href: "/bills" },
      { label: "Tất cả hoá đơn" },
    ],
    "/bills/new": [
      { label: "Hoá đơn", href: "/bills" },
      { label: "Thêm hoá đơn" },
    ],
    "/members": [{ label: "Thành viên" }],
    "/reports": [{ label: "Báo cáo", href: "/reports" }],
    "/reports/monthly": [
      { label: "Báo cáo", href: "/reports" },
      { label: "Tổng kết theo tháng" },
    ],
    "/reports/members": [
      { label: "Báo cáo", href: "/reports" },
      { label: "Theo thành viên" },
    ],
    "/reports/bills": [
      { label: "Báo cáo", href: "/reports" },
      { label: "Theo hoá đơn" },
    ],
    "/settings": [{ label: "Cài đặt tổ chức", href: "/settings" }],
    "/settings/general": [
      { label: "Cài đặt tổ chức", href: "/settings" },
      { label: "Thông tin chung" },
    ],
    "/settings/invite": [
      { label: "Cài đặt tổ chức", href: "/settings" },
      { label: "Mã mời" },
    ],
    "/settings/roles": [
      { label: "Cài đặt tổ chức", href: "/settings" },
      { label: "Phân quyền" },
    ],
  };

  const breadcrumbItems = breadcrumbMap[pathname] || [
    { label: "Ứng dụng chia tiền" },
  ];

  return (
    <header className="bg-sidebar flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              if (isLast) {
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              }
              return (
                <React.Fragment key={index}>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={item.href || "#"}>
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2 px-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
