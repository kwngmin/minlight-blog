import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <section className="bg-slate-100 text-center py-8 text-slate-400 flex items-center">
      <span>© 2023 Minlight</span>
      <AiFillGithub size={28} />
    </section>
  );
}
