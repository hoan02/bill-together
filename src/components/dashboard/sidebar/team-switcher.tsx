"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, PlusCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormJoinTeam from "../teams/form-join-team";

interface Team {
  id: string;
  name: string;
  logo: LucideIcon;
  plan: string;
}

interface TeamSwitcherProps {
  teams: Team[];
  onTeamChange: (teamId: string) => void;
  activeTeamId?: string;
}

export function TeamSwitcher({
  teams,
  onTeamChange,
  activeTeamId,
}: TeamSwitcherProps) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  const Logo = activeTeam?.logo;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2 px-2">
              {Logo ? (
                <>
                  <Logo className="h-5 w-5" />
                  <span className="flex-1 truncate">{activeTeam?.name}</span>
                </>
              ) : (
                <>
                  <PlusCircle className="h-5 w-5" />
                  <span className="flex-1 truncate">Chọn tổ chức</span>
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuLabel>Tổ chức của bạn</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.id}
                onClick={() => {
                  setActiveTeam(team);
                  onTeamChange(team.id);
                }}
                className="flex items-center gap-2"
              >
                <team.logo className="h-4 w-4" />
                <span className="flex-1 truncate">{team.name}</span>
                {team.plan && (
                  <span className="text-xs text-muted-foreground">
                    {team.plan}
                  </span>
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/organizations/new"
                className="flex items-center gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Tạo tổ chức mới</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/join" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                <span>Tham gia tổ chức</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
