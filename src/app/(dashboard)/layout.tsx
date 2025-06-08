import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { Header } from "@/components/header/Header";
import { DashboardProvider } from "@/components/providers/dashboard-provider";

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
