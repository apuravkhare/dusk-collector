"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper'
import { Parallax, Mousewheel, Pagination } from 'swiper/modules';
import About from './about/page';
import Music from './music/page';
import ShowsPage from './shows/page';
import TopNavBar from './TopNavBar';
import backgroundImage from "../public/ferry_sunset.jpeg";
import duskCollectorLogo from '../public/Dusk Collector Cutout.svg';

function VideoPage() {
  return (
    <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
      <source src="/IMG_0409.mp4" type="video/mp4" />
    </video>
  );
}

function BandName() {
  const bandName = "DUSK COLLECTOR";
  const letters = bandName.split("");
  return (
    <div data-swiper-parallax="-500" className="flex flex-row justify-center items-center fade-text color-black text-4xl opacity-80">
      {letters.map((char, index) => (
        <span
          key={index}
          style={{ "--index": index } as React.CSSProperties} // Pass index to CSS variables
        >
          {char === " " ? "\u00A0" : char} {/* Handles blank spaces correctly */}
        </span>
      ))}
    </div>
  );
}


function ParallaxBackground() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage.src})` }} data-swiper-parallax="-300" className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center">
      <img data-swiper-parallax="-400" src={duskCollectorLogo.src} className="opacity-40 w-50 h-auto" alt="Dusk Collector Logo" />
      <BandName />
    </div>
  );
}


export default function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start background-image: url('/IMG_3220.jpg')" >
    //   HOME
    //   </main>
    // </div>

    <main className="w-screen h-screen overflow-hidden">
      <TopNavBar swiperInstance={swiperInstance} />

      <Swiper modules={[Parallax, Mousewheel, Pagination]} parallax={true} direction="vertical" mousewheel={{ forceToAxis: true }} pagination={{ clickable: true }} onSwiper={setSwiperInstance} className="w-full h-full">
        {/* Next.js "Pages" loaded as performant components */}
        <SwiperSlide><ParallaxBackground /></SwiperSlide>
        <SwiperSlide><Music /></SwiperSlide>
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><ShowsPage /></SwiperSlide>
      </Swiper>
    </main>

    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    // </div>
  );
}
