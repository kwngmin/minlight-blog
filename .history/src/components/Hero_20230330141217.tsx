import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar-hands-up.png";

export default function Hero() {
  return (
    <section className="flex flex-col text-center">
      <div className="w-48 rounded-full bg-slate-200 overflow-hidden mx-auto">
        <Image src={avatar} alt="avatar" className="bg-bottom"></Image>
      </div>
      <h1 className="text-2xl font-semibold">{`Hello, I'm MinLight`}</h1>
      <h2 className="text-lg font-medium">Front end Developer & Designer</h2>
      <p>{`I'm always thinking about designing a better user experience.`}</p>
      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </section>
  );
}
