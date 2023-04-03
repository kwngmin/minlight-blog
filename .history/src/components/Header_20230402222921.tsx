import Link from "next/link";

const navData = [
  { name: "About", path: "/about" },
  { name: "Posts", path: "/posts" },
];

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center p-4 mx-auto max-w-screen-lg">
      <Link href="/">
        <h1 className="text-3xl font-bold">Minlight</h1>
      </Link>
      <nav className="flex gap-4 px-4 lg:px-0">
        {navData.map(({ name, path }) => (
          <Link
            href={path}
            key={path}
            className="text-black/60 hover:text-black text-lg font-medium hover:underline decoration-slate-400 hover:decoration-4 underline-offset-8"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
