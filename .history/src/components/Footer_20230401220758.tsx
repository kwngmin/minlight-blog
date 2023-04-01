import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center p-4 mx-auto max-w-screen-lg">
      <section className="bg-slate-100 text-center py-8 text-slate-400 flex items-center">
        <span>© 2023 Minlight</span>
        <AiFillGithub size={28} />
      </section>
    </div>
  );
}
