import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useCycle } from "framer";

export const ThemeSwitch = () => {
  const {setTheme, resolvedTheme} = useTheme()

  const isDark = resolvedTheme === "dark"

  const handleTheme = () => setTheme(isDark ? "light" : "dark")
  return (
    <div className="ml-3">
      <Button variant="outline" size="icon" onClick={handleTheme}>
        {isDark ? <Sun/> : <Moon/>}
      </Button>
    </div>
  );
};
