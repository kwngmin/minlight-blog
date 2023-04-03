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
    <section className="flex flex-col items-center gap-2 max-w-xl mx-auto">
      {/* <h2 className="text-2xl font-semibold my-4">Contact Me</h2> */}
      <ul className="flex justify-center items-center gap-2">
        <a
          href="mailto:kwngmin.k@gmail.com"
          className="px-6 rounded-full hover:bg-black hover:text-white py-2 border"
        >
          kwngmin.k@gmail.com
        </a>
        {LINKS.map(({ url, icon }, index) => (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-4xl text-black/80 hover:bg-black hover:text-white rounded-full p-8 border"
          >
            {icon}
          </a>
        ))}
      </ul>
      <div className="w-full relative flex justify-center">
        <div className="w-full my-10 border-b"></div>
        <span className="absolute top-7 bg-white px-4 text-black/40">Or</span>
      </div>
      <ContactForm />
    </section>
  );
}
