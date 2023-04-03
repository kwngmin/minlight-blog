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
      <h2>Contact Me</h2>
      <p>kwngmin.k@gmail.com</p>
      <ul className="flex mx-auto">
        {LINKS.map(({ url, icon }, index) => (
          <a href={url} key={index} target="_blank" rel="noreferrer">
            {icon}
          </a>
        ))}
      </ul>
      <h2>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
