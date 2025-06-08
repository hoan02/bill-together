import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Header } from "@/components/dashboard/header/Header";
import { DashboardProvider } from "@/components/providers/dashboard-provider";
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";

export default async function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </DashboardProvider>
  );
}
