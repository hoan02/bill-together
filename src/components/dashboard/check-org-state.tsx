"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserStore } from "@/store/user-store";
import { FormJoinTeam } from "@/components/dashboard/form-join-team";

export function CheckOrgState() {
  const router = useRouter();
  const { organizations } = useUserStore();

  // Nếu chưa có tổ chức nào, hiển thị form join team
  if (organizations.length === 0) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md">
          <FormJoinTeam />
        </div>
      </div>
    );
  }

  // Nếu đã có tổ chức, không hiển thị gì
  return null;
} 