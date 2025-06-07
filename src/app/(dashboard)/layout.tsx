import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { Header } from "@/components/header/Header";
import { currentUser } from "@/lib/auth";
import { User } from "@/types/user";

export default async function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = await currentUser();
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
