import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <section className="text-center py-16 text-black/30 border-t mt-16">
      <span>© 2023 Minlight</span>
      {/* <Link
          href="https://github.com/kwngmin"
          className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-slate-300"
        >
          <AiFillGithub size={20} />
          <span>GitHub</span>
        </Link> */}
    </section>
  );
}
