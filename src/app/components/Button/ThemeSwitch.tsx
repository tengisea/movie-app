import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeSwitch = () => {
  return (
    <div className="ml-3">
      <Button variant="outline" size="icon">
        <Moon />
      </Button>
    </div>
  );
};
