import ContactForm from "@/components/ContactForm";
import { BsLinkedin, BsGithub } from "react-icons/bs";
export default function ContactPage() {
  const LINKS = [
    { icon: <BsGithub />, url: "https://github.com/kwngmin" },
    {
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EA%B9%80-52b83a25a/",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-1">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <ul className="flex justify-center items-center gap-2">
        <a
          href="mailto:kwngmin.k@gmail.com"
          className="px-6 rounded-full hover:bg-zinc-200 py-2 border"
        >
          kwngmin.k@gmail.com
        </a>
        {LINKS.map(({ url, icon }, index) => (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-black/80 hover:bg-zinc-200 rounded-full p-2 border"
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
