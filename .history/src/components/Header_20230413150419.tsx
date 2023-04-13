import Link from "next/link";

const navData = [
  { name: "About", path: "/about" },
  { name: "Posts", path: "/posts" },
];

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center p-4 mx-auto max-w-screen-lg">
      <Link href="/">
        <h1 className="text-2xl font-bold">Minlight</h1>
      </Link>
      <nav \>
        {navData.map(({ name, path }) => (
          <Link
            href={path}
            key={path}
            className="text-black/60 hover:text-black font-medium hover:underline decoration-slate-400 hover:decoration-4 underline-offset-8 px-4"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
