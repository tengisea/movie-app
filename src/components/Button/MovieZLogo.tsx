"use client"

import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import { useRouter } from "next/navigation";
export const MovieZLogo = () => {
  const {push} = useRouter()

  const handleGoHome = (e) => {
    e.preventDefault();
    push("/");
  };
  return (
    <Button variant={"ghost"} className="text-[16px] font-bold italic" onClick={handleGoHome}>
      <Film size={20} /> Movie Z
    </Button>
  );
};
