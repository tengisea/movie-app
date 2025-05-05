"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AboutMovie } from "./AboutMovie";
import { Button } from "../ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { SildeLoading } from "./SildeLoading";

type NowPlaying = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  id: number
};
export const Slide = ({ vote_average, original_title, id }:MovieDetail) => {
  const { push } = useRouter();
  const handleGoToDetailPage = (id: string) => () => {
    push(`/detail/${id}`);
  };
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { data, isLoading } = useFetchDataInClient(
    "/movie/now_playing?language=en-US&page=1"
  );

  const nowPlaying: NowPlaying[] =
    data?.results?.map((movie: string) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
    })) ?? [];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  const carouselClasses = {
    previous: `absolute left-4 top-1/2 -translate-y-1/2 ${
      currentIndex === 0 ? "hidden" : ""
    }`,
    next: `absolute right-4 top-1/2 -translate-y-1/2 ${
      currentIndex === totalItems - 1 ? "hidden" : ""
    }`,
  };
  
  return (
    <div className="relative h-127.5 md:h-150 w-screen max-w-full flex justify-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen max-h-[550px]"
        setApi={setCarouselApi}
        opts={{ loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {nowPlaying.map(
            ({ title, vote_average, overview, backdrop_path, id }, index) => (
              <CarouselItem key={index}>
                <div onClick={handleGoToDetailPage(id)}>
                  <AboutMovie
                    title={title}
                    vote_average={vote_average}
                    overview={overview}
                    backdrop_path={backdrop_path}
                    id={id}
                  />
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex ">
        <Button
          variant={"secondary"}
          className={cn(carouselClasses.previous, "hidden md:block")}
          onClick={() => carouselApi?.scrollPrev()}>
          <div>
            <ChevronLeft color="black" />
          </div>
        </Button>
        <Button
          variant={"secondary"}
          className={cn(carouselClasses.next, "hidden md:block")}
          onClick={() => carouselApi?.scrollNext()}>
          <div>
            <ChevronRight color="black" />
          </div>
        </Button>
      </div>
      <div className="absolute top-14/15 flex space-x-2 justify-center items-end hidden md:block">
        {Array.from({ length: totalItems })
          .map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-300"
              }`}
            />
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};
