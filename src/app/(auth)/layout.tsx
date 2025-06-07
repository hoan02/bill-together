import Link from "next/link";
import React, { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/custom-ui/icons";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/dashboard");
  }

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4  dark:bg-transparent">
      <Button className="fixed top-5" variant={"outline"} asChild>
        <Link href={"/"}>
          <Icons.arrowLeft className="h-2 w-2" />
          Back
        </Link>
      </Button>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </section>
  );
}
