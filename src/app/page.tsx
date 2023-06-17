import Image from "next/image";
import landingbg from "../assets/2x/landing.png";
import aboutbg from "../assets/2x/aboutbg.webp";
import calendarbg from "../assets/2x/calendarbg.webp";


// import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Turnero from "./components/Turnero/Turnero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex w-full z-30 relative min-h-screen flex-col items-center justify-between p-24">
    
      <header className="h-[700px] relative flex flex-col  overflow-hidden bg-menu rounded-[4%] w-full max-w-7xl items-center  font-mono text-sm text-black lg:flex shadow-2xl shadow-black">
        <NavBar />
        <aside className=" self-start pl-8 mt-24">
          <h1 className="text-6xl font-quicksand">
            <p>MENTAL</p>
            <p className="text-white">HEALTH</p>
          </h1>
          <h2 className="w-96 font-spartan text-white pt-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel{" "}
          </h2>
        </aside>

        <Image
          width={1000}
          height={1000}
          alt="landing"
          src={landingbg}
          className="w-full absolute  object-cover -z-10 h-full "
        ></Image>
      </header>

      <section className="relative w-full 2xl:w-10/12 -z-20">
        <article className="h-[500px] -z-10 top-48 right-0 justify-center  absolute  mt-36 ml-10 flex-col self-end  overflow-hidden bg-menu rounded-[4%] lg:w-[500px] xl:w-[600px] 2xl:w-[800px] max-w-7xl items-center  font-mono text-sm text-black lg:flex shadow-2xl shadow-black ">
          <Image
            width={1000}
            height={1000}
            alt="calendar"
            src={calendarbg}
            className="w-full absolute -z-10 h-full "
          ></Image>
          <Turnero />
        </article>
        {/* about us */}
        <article className="h-[500px] mt-36 relative  mr-10 flex flex-col self-start  overflow-hidden bg-menu rounded-[4%] lg:w-[500px] xl:w-[600px] 2xl:w-[800px] max-w-7xl items-center  font-mono text-sm text-black lg:flex shadow-2xl shadow-black ">
          <Image
            alt="about"
            src={aboutbg}
            className="absolute -z-10 w-full h-full  object-cover"
          ></Image>
          <h2 className="self-end w-96 k text-6xl font-quicksand pt-7 pl-12">
            <p>ABOUT</p>
            <p className="text-white"> US</p>
          </h2>
          <p className="p-8 text-justify w-96 self-end text-white text-spartan mb-">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
            ut
          </p>
          <article className="h-[500px] mt-36 relative flex flex-col self-start  overflow-hidden bg-menu rounded-[4%] w-[800px] max-w-7xl items-center  font-mono text-sm text-black lg:flex shadow-2xl shadow-black ">
            <header>
              <h2 className="self-end w-96 k text-6xl font-quicksand pt-7 pl-12">
                <p>ABOUT</p>
                <p className="text-white"> US</p>
              </h2>
            </header>
            <article className="p-8 text-justify w-96 self-end text-white text-spartan ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut
            </article>
          </article>{" "}
        </article>
      </section>
      <Footer />
    </main>
  );
}
