import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar-hands-up.png";
import { BsGithub } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="flex flex-col text-center my-8">
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full mx-auto mb-2 bg-slate-100"
        width={160}
        priority
      ></Image>
      <h1 className="text-2xl font-semibold">{`Hello, I'm Minlight`}</h1>
      <h2 className="text-lg font-medium">Front end Developer & Designer</h2>
      <p className="text-black/60">{`I'm always thinking about designing a better user experience.`}</p>
      <section className="flex justify-center gap-2 my-4">
        <a
          href="https://github.com/kwngmin"
          target="_blank"
          rel="noreferrer"
          className="ring hover:ring-0 ring-slate-300 hover:bg-black px-5 font-medium text-slate-600 hover:text-white rounded-full"
        >
          <button className="flex items-center h-10">
            <BsGithub size={24} className="mr-2" /> GitHub
          </button>
        </a>
        <Link href="/contact">
          <button className="rounded-full bg-slate-500  hover:bg-slate-600 px-5 h-10 text-white/90 font-medium">
            Contact Me
          </button>
        </Link>
      </section>
    </section>
  );
}
