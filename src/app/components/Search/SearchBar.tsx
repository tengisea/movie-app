import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="flex">
      <Search size={16} color="#ada9a9" />
      <Input placeholder="Search" />
    </div>
  );
}
