import Link from "next/link";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Posts", path: "/posts" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <div className="max-w-screen-md translate-x-1/2">
      <div className="flex justify-between items-center m-4">
        <Link href="/">
          <h1 className="text-4xl font-bold">minlight</h1>
        </Link>
        <nav className="flex gap-4">
          {navData.map(({ name, path }) => (
            <Link
              href={path}
              key={path}
              className="text-black/60 hover:text-black font-medium hover:underline decoration-slate-400 hover:decoration-4 underline-offset-8"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
