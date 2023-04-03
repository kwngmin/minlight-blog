import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar-hands-up.png";
import { AiFillGithub } from "react-icons/ai";

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
      <section className="flex justify-center">
        <Link href="/contact">
          <button className="rounded-full bg-slate-500  hover:bg-slate-600 px-4 py-1 my-2 text-white">
            Contact Me
          </button>
        </Link>
        <a href="https://github.com/kwngmin" target="_blank" rel="noreferrer">
          <AiFillGithub />
          GitHub
        </a>
      </section>
    </section>
  );
}
