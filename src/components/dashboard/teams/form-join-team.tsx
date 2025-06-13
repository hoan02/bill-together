import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const formSchema = z.object({
  link: z.string().url().optional(),
  code: z.string().length(6).optional(),
});

type FormData = z.infer<typeof formSchema>;

const FormJoinTeam = () => {
  const [tab, setTab] = React.useState("link");
  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Join team data", data);
    // TODO: Call your API here
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle>Join a team</DialogTitle>
          <DialogDescription>
            Use a team invite link or enter a 6-digit code to join.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={tab} onValueChange={setTab} className="mt-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="link">Via Link</TabsTrigger>
            <TabsTrigger value="code">Via Code</TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="mt-4">
            <div className="grid gap-3">
              <Label htmlFor="link">Team invite link</Label>
              <Input
                id="link"
                {...register("link")}
                placeholder="https://example.com/invite/..."
              />
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="grid gap-3">
              <Label htmlFor="code">8-digit code</Label>
              <InputOTP
                maxLength={8}
                onChange={(value) => setValue("code", value)}
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
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Join team</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default FormJoinTeam;
