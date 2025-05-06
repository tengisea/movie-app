
import { ChevronRight } from 'lucide-react'


export const SeeMore = (handle:string) => {
  return (
    <button className="flex gap-2" onClick={handle}>
        See more <ChevronRight/>
    </button>
  )
}
