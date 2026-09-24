"use client";

export default function Show({ show }: { show: any }) {
  if (!show) {
    return <p>Show not found</p>;
  }

  return (
    <div className="w-full flex flex-row items-center justify-between p-4 m-4 border rounded shadow-md bg-white dark:bg-black">
      <div className="flex-col">
        <h1>{show.venue}</h1>
        <p>{show.date}</p>
      </div>
      <div className="flex-col">
        <a href={show.ticketsUrl} target="_blank" rel="noopener noreferrer" >
          Get Tickets
        </a>
      </div>
    </div>
  );
} 