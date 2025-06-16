import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { joinTeam } from "@/actions/team/join-team";

const formSchema = z.object({
  code: z.string().length(8, "Mã tham gia phải có 8 ký tự"),
});

type FormData = z.infer<typeof formSchema>;

const FormJoinTeam = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const result = await joinTeam(data);

      if (!result.success) {
        toast.error(result.error || "Không thể tham gia tổ chức");
        return;
      }

      toast.success("Tham gia tổ chức thành công");
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      toast.error("Đã xảy ra lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Tham gia tổ chức</DialogTitle>
            <DialogDescription>
              Nhập mã tham gia 8 ký tự để tham gia tổ chức
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="code">Mã tham gia</Label>
              <InputOTP
                maxLength={8}
                onChange={(value) => setValue("code", value)}
                disabled={isLoading}
              >
                <InputOTPGroup>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <InputOTPSlot key={`first-${i}`} index={i} />
                  ))}
                  <InputOTPSeparator>-</InputOTPSeparator>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <InputOTPSlot key={`second-${i}`} index={i + 4} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {errors.code && (
                <p className="text-sm text-red-500">{errors.code.message}</p>
              )}
            </div>
          </div>

          <DialogFooter className="flex justify-between gap-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isLoading}>
                Hủy
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Đang tham gia..." : "Tham gia"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormJoinTeam;
