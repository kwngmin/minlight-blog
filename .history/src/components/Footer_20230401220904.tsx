import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <section className="bg-slate-100 text-center py-8 text-slate-400 flex items-center">
      <div className="w-full flex justify-between items-center p-4 mx-auto max-w-screen-lg">
        <span>© 2023 Minlight</span>
        <span>GitHub</span>
        <AiFillGithub size={28} />
      </div>
    </section>
  );
}
