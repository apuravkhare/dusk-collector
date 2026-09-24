"use client";

import backgroundImage from "../../public/IMG_3220.jpg";

export default function About() {
  return (
    <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundRepeat: "no-repeat",
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      // mobile: fit the whole 4:3 photo to the width. sm+: original full-bleed cover.
      className="bg-contain bg-top sm:h-screen sm:bg-cover sm:bg-center"
    >
      <div className="w-full flex items-center justify-center aspect-[4/3] sm:aspect-auto sm:h-1/2"></div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} className="w-full flex flex-col items-center justify-center p-4 sm:h-1/2">
        <h1 style={{ color: 'white' }}>We are Dusk Collector!</h1>

        <p style={{ fontSize: 18, color: 'white' }}>
          Formed in 2024, in Seattle, WA. We&apos;re comprised of
          Apurav (Guitars), Robby (Guitars), Jake (Bass), Sanchit (Drums), and Wynn (Vocals).
        </p>

        <p style={{ fontSize: 18, color: 'white' }}>
          Our influences include a ton of 90s and 2000s rock and metal and prog, with a bit of LoFi and post-rock thrown in for good measure.
        </p>

        <p style={{ fontSize: 18, color: 'white' }}>
          We love to blend in our influences and hope to create something unique and relatable.
        </p>
      </div>
    </div>
  )
}
