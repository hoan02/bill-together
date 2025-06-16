"use client";

import { Building2, PlusCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EmptyOrgState() {
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-center">
            <Building2 className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-center">
            Chưa tham gia tổ chức nào
          </CardTitle>
          <CardDescription className="text-center">
            Bạn cần tham gia hoặc tạo một tổ chức để bắt đầu sử dụng Bill
            Together
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button asChild className="w-full">
              <Link href="/organizations/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Tạo tổ chức mới
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/join">Tham gia tổ chức</Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Bạn cần tham gia ít nhất một tổ chức để sử dụng các tính năng
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
