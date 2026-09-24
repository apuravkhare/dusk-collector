import Image from "next/image";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start background-image: url('/IMG_3220.jpg')" >
    //   HOME
    //   </main>
    // </div>

    <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
      <source src="/IMG_0409.mp4" type="video/mp4" />
    </video>

    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    // </div>
  );
}
