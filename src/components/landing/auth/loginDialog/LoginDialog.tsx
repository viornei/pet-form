"use client";
import ActionButton from "@/components/ui/ActionButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
type TLoginData = {
  email: string;
  password: string;
};
export function LoginDialog() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginData>();
  const router = useRouter();
  const supabase = createClient();

  const onSubmit = async (data: TLoginData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setError("email", {
        type: "manual",
        message: "wrong email or password",
      });
    } else {
      setOpen(false);
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ActionButton>Login</ActionButton>
      </DialogTrigger>
      <DialogContent className="max-w-100 rounded-xl sm:max-w-120">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>Log in to your profile here</DialogDescription>
          </DialogHeader>
          <div className="mt-4 grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                withBorder
                id="email"
                {...register("email")}
                type="email"
                placeholder="pet.parent@gmail.com"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                withBorder
                id="password"
                {...register("password")}
                type="password"
                placeholder="******"
              />
              <div className="h-8">
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="gap-4">
            <DialogClose asChild>
              <ActionButton className="hidden h-10 w-20 rounded-full border-b-4 border-gray-500 bg-gray-100 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2 md:block">
                Cancel
              </ActionButton>
            </DialogClose>
            <ActionButton type="submit">Log in</ActionButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
