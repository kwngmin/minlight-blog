import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <section className="bg-slate-100 text-center py-4 text-slate-400 flex items-center">
      <div className="w-full flex justify-between items-center p-4 mx-auto max-w-screen-lg">
        <span>© 2023 Minlight</span>
        <Link
          href="https://github.com/kwngmin"
          className="flex items-center gap-1"
        >
          <AiFillGithub size={28} />
          <span>GitHub</span>
        </Link>
      </div>
    </section>
  );
}
