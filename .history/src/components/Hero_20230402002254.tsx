import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar-hands-up.png";

export default function Hero() {
  return (
    <section className="flex flex-col text-center my-8">
      {/* <div className="w-48 rounded-full bg-slate-200 overflow-hidden mx-auto mb-2">
        <Image src={avatar} alt="avatar" className="bg-bottom"></Image>
      </div> */}
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full mx-auto mb-2 bg-slate-100"
        width={160}
        priority
      ></Image>
      <h1 className="text-2xl font-semibold">{`Hello, I'm MinLight`}</h1>
      <h2 className="text-lg font-medium">Front end Developer & Designer</h2>
      <p className="text-black/60">{`I'm always thinking about designing a better user experience.`}</p>
      <Link href="/contact">
        <button className="rounded-full bg-slate-500  hover:bg-slate-600 px-4 py-1 my-2 text-white">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
