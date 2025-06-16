"use client";

import { useUserStore } from "@/store/user-store";
import { EmptyOrgState } from "@/components/dashboard/empty-org-state";

export default function DashboardPage() {
  const { organizations } = useUserStore();

  // Nếu chưa có tổ chức nào, hiển thị EmptyOrgState
  // if (organizations.length === 0) {
  //   return <EmptyOrgState />;
  // }

  // Nếu đã có tổ chức, redirect đến trang của tổ chức đầu tiên
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Chào mừng đến với Bill Together</h1>
        <p className="mt-2 text-muted-foreground">
          Vui lòng chọn một tổ chức từ sidebar để bắt đầu
        </p>
      </div>
    </div>
  );
}
