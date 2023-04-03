import ContactForm from "@/components/ContactForm";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function ContactPage() {
  const LINKS = [
    { icon: <AiFillGithub />, url: "https://github.com/kwngmin" },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EA%B9%80-52b83a25a/",
    },
  ];
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <a href="mailto:kwngmin.k@gmail.com">kwngmin.k@gmail.com</a>
      <ul className="flex justify-center items-center gap-4">
        {LINKS.map(({ url, icon }, index) => (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-3xl"
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
