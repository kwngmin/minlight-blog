import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/images/avatar-hands-up.png";

export default function HomePage() {
  return (
    <section className="">
      <div className="w-64 rounded-full bg-slate-200 overflow-hidden">
        <Image src={avatar} alt="avatar"></Image>
      </div>
      <h1>{`Hello, I'm MinLight`}</h1>
      <h2>Front end Developer & Designer</h2>
      <p>{`I'm always thinking about designing a better user experience.`}</p>
      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </section>
  );
}
