"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useUserStore } from "@/store/useUserStore";
import { Menu } from "lucide-react";

export const MobileMenu = () => {
  const user = useUserStore((s) => s.user);
  const clearUser = useUserStore((s) => s.clearUser);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    clearUser();
    location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 md:hidden">
          <Menu className="h-8 w-8" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-primary-pink-100 mt-2 min-w-45 py-2 text-base"
      >
        <DropdownMenuItem asChild>
          <a href="#services">Services</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#calendar">Calendar</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#faq">FAQ</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#contact">Contact</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
