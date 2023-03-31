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
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link> */}
          {navData.map(({ name, path }) => (
            <Link href={path} key={path} className="">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
