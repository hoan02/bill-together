"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createOrganization } from "@/actions/organization/create-organization";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, "Tên tổ chức phải có ít nhất 2 ký tự"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function NewOrganizationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [createdOrg, setCreatedOrg] = React.useState<{
    inviteLink: string;
    joinCode: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const result = await createOrganization(data);

      if (!result.success) {
        toast.error(result.error || "Không thể tạo tổ chức");
        return;
      }

      if (result.data?.inviteLink && result.data?.joinCode) {
        setCreatedOrg({
          inviteLink: result.data.inviteLink,
          joinCode: result.data.joinCode,
        });
        toast.success("Tạo tổ chức thành công");
      } else {
        toast.error("Không thể tạo tổ chức");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Đã sao chép vào clipboard");
    } catch (err) {
      toast.error("Không thể sao chép");
    }
  };

  if (createdOrg) {
    return (
      <div className="container max-w-2xl py-8">
        <Card>
          <CardHeader>
            <CardTitle>Tạo tổ chức thành công!</CardTitle>
            <CardDescription>
              Chia sẻ mã tham gia dưới đây để mời thành viên tham gia tổ chức
              của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Mã tham gia</Label>
              <div className="flex gap-2">
                <Input value={createdOrg.joinCode} readOnly />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(createdOrg.joinCode)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Alert>
              <AlertTitle>Lưu ý</AlertTitle>
              <AlertDescription>
                Hãy lưu lại mã tham gia này để chia sẻ với thành viên. Bạn có
                thể tìm thấy thông tin này trong cài đặt tổ chức sau.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => router.push("/dashboard")}
            >
              Đi đến Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Tạo tổ chức mới</CardTitle>
          <CardDescription>
            Tạo một tổ chức mới để quản lý chi tiêu nhóm của bạn
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Tên tổ chức</Label>
              <Input
                id="name"
                placeholder="Nhập tên tổ chức"
                {...register("name")}
                disabled={isLoading}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Mô tả (tùy chọn)</Label>
              <Textarea
                id="description"
                placeholder="Nhập mô tả về tổ chức của bạn"
                {...register("description")}
                disabled={isLoading}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
              className="flex-1"
            >
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Đang tạo..." : "Tạo tổ chức"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
