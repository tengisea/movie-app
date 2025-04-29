import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'


export const SeeMore = () => {
  return (
    <Button variant={"outline"} className="flex gap-2">
        See more <ChevronRight/>
    </Button>
  )
}
