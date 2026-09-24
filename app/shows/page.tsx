
import { promises as fs } from 'fs';
import backgroundImage from "../../public/000009960020.jpg";
import ShowsContainer from './shows-container';

export default async function ShowsPage() {
  const file = await fs.readFile(process.cwd() + '/data/shows.json', 'utf8');
  const shows = JSON.parse(file);


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
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start opacity-70">
        <ShowsContainer shows={shows} />
      </main>
    </div>
  )

}