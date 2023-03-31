import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2">
      <h1 className="text-4xl font-bold">minlight</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>posts</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
