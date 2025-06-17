"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { organizations, members } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { headers } from "next/headers";

const joinTeamSchema = z.object({
  code: z.string().length(8, "Mã tham gia phải có 8 ký tự"),
});

export async function joinTeam(data: z.infer<typeof joinTeamSchema>) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    const validatedData = joinTeamSchema.parse(data);

    // Tìm tổ chức theo mã tham gia
    const [organization] = await db
      .select()
      .from(organizations)
      .where(eq(organizations.inviteCode, validatedData.code));

    if (!organization) {
      return {
        success: false,
        error: "Mã tham gia không hợp lệ",
      };
    }

    // Kiểm tra xem người dùng đã là thành viên chưa
    const [existingMember] = await db
      .select()
      .from(members)
      .where(
        and(
          eq(members.organizationId, organization.id),
          eq(members.userId, session.user.id)
        )
      );

    if (existingMember) {
      return {
        success: false,
        error: "Bạn đã là thành viên của tổ chức này",
      };
    }

    // Thêm người dùng vào tổ chức
    await db.insert(members).values({
      id: crypto.randomUUID(),
      organizationId: organization.id,
      userId: session.user.id,
      role: "MEMBER",
      createdAt: new Date(),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("[JOIN_TEAM]", error);
    return {
      success: false,
      error: "Đã xảy ra lỗi khi tham gia tổ chức",
    };
  }
} 