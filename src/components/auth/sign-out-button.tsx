"use client";

import { useRouter } from "next/navigation";

import { signOut } from "@/lib/auth-client";
import { Icons } from "@/components/custom-ui/icons";

export default function SignOutButton() {
  const router = useRouter();
  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between w-18 cursor-pointer"
    >
      <Icons.logOut />
      Log out
    </div>
  );
}
