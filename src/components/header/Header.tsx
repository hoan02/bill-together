"use client";

import React from "react";
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
import { useNavStore } from "@/store/nav-store";

export function Header() {
  const { activeNavKey } = useNavStore();

  // Map activeNavKey to breadcrumb items
  // This mapping can be adjusted as needed
  const breadcrumbMap: Record<
    string,
    { label: string; href?: string }[]
  > = {
    Playground: [
      { label: "Building Your Application", href: "#" },
      { label: "Playground" },
    ],
    Models: [
      { label: "Building Your Application", href: "#" },
      { label: "Models" },
    ],
    Documentation: [
      { label: "Building Your Application", href: "#" },
      { label: "Documentation" },
    ],
    Settings: [
      { label: "Building Your Application", href: "#" },
      { label: "Settings" },
    ],
  };

  const breadcrumbItems = breadcrumbMap[activeNavKey] || [
    { label: "Building Your Application", href: "#" },
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
      <div className="flex items-center gap-2 px-4">ok</div>
    </header>
  );
}
