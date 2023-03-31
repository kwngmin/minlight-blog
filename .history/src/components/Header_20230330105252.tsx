import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-4 my-2">
      <Link href="/">
        <h1 className="text-4xl font-bold">minlight</h1>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
        <ul className="flex gap-4">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
