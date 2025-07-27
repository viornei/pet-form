"use client";
import { LoginDialog } from "@/components/landing/auth/loginDialog/LoginDialog";
import ActionButton from "@/components/ui/ActionButton";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const user = useUserStore((s) => s.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    clearUser();
    location.reload();
  };
  return (
    <header className="bg-primary-pink-100 sticky top-0 flex w-full justify-center">
      <div className="hidden h-10 w-330 items-center justify-between border-b-1 border-b-gray-400 px-4 py-8 md:flex md:px-12 md:pt-18 md:pb-12">
        <Link
          href="/"
          className="relative hidden h-48 w-20 overflow-hidden md:block"
        >
          <Image
            src="/picsvg_download (2).svg"
            alt="logo"
            width={200}
            height={200}
            className="h-full object-cover"
          />
        </Link>
        <nav aria-label="Main navigation" className="flex gap-4">
          <ul className="flex items-center gap-6 text-sm font-semibold transition-all duration-300 md:text-base">
            <li>
              <a
                href="#services"
                className="hover:text-primary-pink-700 hidden transition md:block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#calendar"
                className="hover:text-primary-pink-700 transition"
              >
                Calendar
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary-pink-700 transition">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary-pink-700 hidden transition md:block"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        {user ? (
          <ActionButton onClick={handleLogout}>Log out</ActionButton>
        ) : (
          <div className="flex items-center gap-4">
            <a href="#form">
              <ActionButton className="h-10 w-20 rounded-full border-b-4 border-gray-500 bg-gray-100 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2">
                Join
              </ActionButton>
            </a>
            <LoginDialog />
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
