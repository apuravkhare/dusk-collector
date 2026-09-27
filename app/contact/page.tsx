import backgroundImage from "../../public/000009960016.jpg";
import { Envelope, Instagram } from 'react-bootstrap-icons';

export default function ContactPage() {
  // const file = await fs.readFile(process.cwd() + '/data/shows.json', 'utf8');
  // const shows = JSON.parse(file);

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
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start opacity-70">
        <h1>Contact Us</h1>
        <div className="flex flex-row items-center">
          <Instagram />
          <a href="https://www.instagram.com/duskcollectorband/" target="_blank" rel="noopener noreferrer" className="ml-2">
            @duskcollectorband
          </a>
        </div>
        <div className="flex flex-row items-center">
          <Envelope />
          <a href="mailto:duskcollectorband@gmail.com" className="ml-2">
            duskcollectorband_at_gmail.com
          </a>
        </div>
      </main>
    </div>
  )

}