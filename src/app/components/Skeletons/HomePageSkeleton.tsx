import { Skeleton } from "@/components/ui/skeleton"

export const HomePageSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[32px] w-[250px] rounded-xl" />
      <Skeleton className="h-[32px] w-[165px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-[439px] w-[229px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
