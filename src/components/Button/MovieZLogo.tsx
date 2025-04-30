import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
export const MovieZLogo = () => {
  return (
    <Button variant={"ghost"} className="text-[16px] font-bold italic">
      <Film size={20} /> Movie Z
    </Button>
  );
};
