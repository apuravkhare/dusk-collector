"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper'
import { Mousewheel, Pagination } from 'swiper/modules';
import About from './about/page';
import Music from './music/page';
import ShowsPage from './shows/page';
import TopNavBar from './TopNavBar';
import { Parallax, Background } from 'react-parallax';
import backgroundImage from "../public/ferry_sunset.jpeg";
import duskCollectorLogo from '../public/Dusk Collector Cutout.svg';

function VideoPage() {
  return (
    <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
      <source src="/IMG_0409.mp4" type="video/mp4" />
    </video>
  );
}


function ParallaxBackground() {
  return (
    <Parallax bgImage={backgroundImage.src} strength={500} blur={{min: -1, max: 2}} className="w-full h-full flex items-center justify-center object-cover">
        <img src={duskCollectorLogo.src} className="opacity-40 w-50 h-auto translate-x-[50%]" alt="Dusk Collector Logo" />
    </Parallax>
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

      <Swiper modules={[Mousewheel, Pagination]} direction="vertical" mousewheel={{ forceToAxis: true }} pagination={{ clickable: true }} onSwiper={setSwiperInstance} className="w-full h-full">
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
