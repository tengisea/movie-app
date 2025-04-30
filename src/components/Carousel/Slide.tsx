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

type NowPlaying = {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
};
export const Slide = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { data } = useFetchDataInClient(
    "/movie/now_playing?language=en-US&page=1"
  );
  const nowPlaying: NowPlaying[] =
    data?.results?.map((movie: any) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
    })) ?? [];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
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
    <div className="relative h-150 max-h-[600px] w-screen max-w-full flex justify-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen h-96 max-h-[500px] relative z-0"
        setApi={setCarouselApi}
        opts={{ loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {nowPlaying.map(
            ({ title, vote_average, overview, backdrop_path }, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <AboutMovie
                    title={title}
                    vote_average={vote_average}
                    overview={overview}
                    backdrop_path={backdrop_path}
                  />
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center">
        <Button
          variant={"secondary"}
          className={carouselClasses.previous}
          onClick={() => carouselApi?.scrollPrev()}>
          <div>
            <ChevronLeft color="black" />
          </div>
        </Button>
        <Button
          variant={"secondary"}
          className={carouselClasses.next}
          onClick={() => carouselApi?.scrollNext()}>
          <div>
            <ChevronRight color="black" />
          </div>
        </Button>
      </div>
      <div className="absolute left-2/5 top-9/10 flex space-x-2 z-20">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
