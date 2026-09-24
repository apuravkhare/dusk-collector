"use client";

import backgroundImage from "../../public/IMG_3220.jpg";

export default function About() {
  return (
    <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ height: "50vh" }} className="w-full flex items-center justify-center"></div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: "50vh" }} className="w-full flex flex-col items-center justify-center p-4">
        <h1 style={{ color: 'white' }}>We are Dusk Collector!</h1>

        <p style={{ fontSize: 18, color: 'white' }}>
          Formed in 2024, in Seattle, WA. We're comprised of
          Apurav (Guitars), Jake (Bass), Robby (Guitars), Sanchit (Drums), and Wynn (Vocals).
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