import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

export const MovieZLogo = () => {
  return (
    <Button variant={"ghost"} className="drop-shadow-">
      <Film size={20} /> Movie Z
    </Button>
  );
};
