import { Skeleton } from "../ui"

export const SildeLoading = () => {
  return (
    <div className="min-w-[150px] md:min-w-[200px]">
      <Skeleton className="aspect-[2/1] w-full rounded-lg" />
      <Skeleton className="mt-2 h-4 w-2/3 md: hidden" />
      <Skeleton className="mt-2 h-4 w-1/3 md hidden" />
    </div>
  )
}
