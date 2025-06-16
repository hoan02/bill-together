"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { organizations, members } from "@/lib/db/schema";
import { nanoid } from "nanoid";
import { headers } from "next/headers";

const createOrganizationSchema = z.object({
  name: z.string().min(2, "Tên tổ chức phải có ít nhất 2 ký tự"),
  description: z.string().optional(),
});

export async function createOrganization(data: z.infer<typeof createOrganizationSchema>) {
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

    const validatedData = createOrganizationSchema.parse(data);

    const [organization] = await db
      .insert(organizations)
      .values({
        name: validatedData.name,
        description: validatedData.description,
        inviteCode: nanoid(8),
        createdById: session.user.id,
      })
      .returning();

    if (!organization) {
      return {
        success: false,
        error: "Không thể tạo tổ chức",
      };
    }

    // Thêm người tạo vào danh sách thành viên với vai trò ADMIN
    await db.insert(members).values({
      organizationId: organization.id,
      userId: session.user.id,
      role: "ADMIN",
    });

    return {
      success: true,
      data: {
        inviteLink: organization.inviteCode,
        joinCode: organization.inviteCode,
      },
    };
  } catch (error) {
    console.error("[CREATE_ORGANIZATION]", error);
    return {
      success: false,
      error: "Đã xảy ra lỗi khi tạo tổ chức",
    };
  }
} 