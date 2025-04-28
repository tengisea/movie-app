"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutMovie } from "./AboutMovie";

type NowPlaying = {
    title: string;
  vote_average: number;
  overview: string;
  backdrop_path:string;
};

export const Slide = ()=> {
const { data } = useFetchDataInClient( "/movie/now_playing?language=en-US&page=1");      
  const nowPlaying = data?.nowPlaying ?? []
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="">
                    {nowPlaying.map((title, index, vote_average, overview) => (
                      <AboutMovie
                        key={index}
                        title={title}
                        vote_average={vote_average}
                        overview={}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
