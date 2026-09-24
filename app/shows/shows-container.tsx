"use client";

import Show from "./show";

export default function ShowsContainer({ shows }: { shows: any[] }) {
    if (!shows || !Array.isArray(shows) || shows.length === 0) {
      return (
        <p>No upcoming shows</p>
      );
    } else {
      return (
        <div className="w-full flex flex-col items-center justify-center p-4 m-4">
          {shows.map((show) => (
            <Show key={show.date} show={show} />
          ))}
        </div>
      )
    }
} 