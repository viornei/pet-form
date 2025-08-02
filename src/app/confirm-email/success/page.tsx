"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/register", { method: "POST" });

      if (!response.ok) {
        console.error("Database error:", await response.text());
        return;
      }
      router.push("/dashboard");
    };
    getUser();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-xl">We confirm registration... 🐾</p>
    </div>
  );
}
