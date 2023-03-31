import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-8">
      <h1 className="text-4xl font-bold">minlight</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
