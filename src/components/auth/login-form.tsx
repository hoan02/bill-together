"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { Icons } from "@/components/custom-ui/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "@/actions/auth.action";
import SignInSocial from "./sign-in-social";

export default function LoginForm() {
  const initialState = { errorMessage: "" };
  const [state, formAction, pending] = useActionState(signIn, initialState);

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
          <Link href="/" className="flex justify-center" aria-label="go home">
            <Icons.logo className="h-10 w-10" />
          </Link>
          <h1 className="mb-1 mt-4 text-xl font-semibold">
            Đăng nhập tài khoản
          </h1>
          <p className="text-sm">
            Chào mừng trở lại! Hãy đăng nhập để tiếp tục.
          </p>
        </div>

        {/* <div className="mt-6 grid grid-cols-2 gap-3"> */}
        <div className="mt-6 grid grid-cols-1 gap-3">
          <SignInSocial provider="google">
            <Icons.google />
            <span>Google</span>
          </SignInSocial>
          {/* <SignInSocial provider="github">
            <Icons.gitHub />
            <span>GitHub</span>
          </SignInSocial> */}
        </div>

        <hr className="my-4 border-dashed" />

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-sm">
              Email
            </Label>
            <Input type="email" required name="email" id="email" />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="pwd" className="text-title text-sm">
                Password
              </Label>
              <Button asChild variant="link" size="sm">
                <Link
                  href="/auth/login/forgot-account"
                  className="link intent-info variant-ghost text-sm"
                >
                  Quên tài khoản?
                </Link>
              </Button>
            </div>
            <Input
              type="password"
              required
              name="pwd"
              id="pwd"
              className="input sz-md variant-mixed"
            />
          </div>
          {
            // errorMessage && !pending && toast.promise(errorMessage)
            // <p aria-live="polite" className="text-sm text-red-500">
            //   {errorMessage}
            // </p>
          }
          <Button className="w-full" loading={pending}>
            Đăng nhập
          </Button>
        </div>
      </div>
      <div className="bg-muted rounded-(--radius) border p-3">
        <p className="text-accent-foreground text-center text-sm">
          Chưa có tài khoản?
          <Button asChild variant="link" className="px-2">
            <Link href="/auth/sign-up">Tạo tài khoản</Link>
          </Button>
        </p>
      </div>
    </form>
  );
}
