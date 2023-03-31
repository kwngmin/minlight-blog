import Link from "next/link";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Posts", path: "/posts" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <div className="max-w-screen-2xl">
      <div className="flex justify-between items-center m-4">
        <Link href="/">
          <h1 className="text-4xl font-bold">minlight</h1>
        </Link>
        <nav className="flex gap-4">
          {navData.map(({ name, path }) => (
            <Link
              href={path}
              key={path}
              className="hover:underline decoration-2"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
