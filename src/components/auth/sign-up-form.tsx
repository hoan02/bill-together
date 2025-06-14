"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { Icons } from "@/components/custom-ui/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signUp } from "@/actions/auth.action";
import Image from "next/image";

export default function SignupForm() {
  const initialState = { errorMessage: "" };
  const [state, formAction, pending] = useActionState(signUp, initialState);

  useEffect(() => {
    if (state.errorMessage.length) {
      toast.error(state.errorMessage);
    }
  }, [state.errorMessage]);

  return (
    <form
      action={formAction}
      className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
    >
      <div className="p-8 pb-6">
        <div className="text-center pb-4">
          <div className="flex justify-center">
            <Link href="/" aria-label="go home">
              <Image
                src="/logo/logo-64.png"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <h1 className="text-title mb-1 mt-4 text-xl font-semibold">
            Đăng ký tài khoản
          </h1>
          <p className="text-sm">
            Chào mừng bạn! Hãy tạo tài khoản để bắt đầu.
          </p>
        </div>

        {/* <div className="mt-6 grid grid-cols-2 gap-3"> */}
        <div className="mt-6 grid grid-cols-1 gap-3">
          <Button type="button" variant="outline">
            <Icons.google />
            <span>Google</span>
          </Button>
          {/* <Button type="button" variant="outline">
            <Icons.gitHub />
            <span>Github</span>
          </Button> */}
        </div>

        <hr className="my-4 border-dashed" />

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstname" className="block text-sm">
                Tên
              </Label>
              <Input type="text" required name="firstname" id="firstname" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname" className="block text-sm">
                Họ
              </Label>
              <Input type="text" required name="lastname" id="lastname" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-sm">
              Email
            </Label>
            <Input type="email" required name="email" id="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pwd" className="text-title text-sm">
              Mật khẩu
            </Label>
            <Input
              type="password"
              required
              name="pwd"
              id="pwd"
              className="input sz-md variant-mixed"
            />
          </div>
          <Button className="w-full" loading={pending}>
            Tiếp tục
          </Button>
        </div>
      </div>
      <div className="bg-muted rounded-(--radius) border p-3">
        <p className="text-accent-foreground text-center text-sm">
          Đã có tài khoản?
          <Button asChild variant="link" className="px-2">
            <Link href="/auth/login">Đăng nhập</Link>
          </Button>
        </p>
      </div>
    </form>
  );
}
