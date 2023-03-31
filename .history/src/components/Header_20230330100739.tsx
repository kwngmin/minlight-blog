import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1 className="text-lg">minlight</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>posts</li>
        <li>contact</li>
      </ul>
    </>
  );
}
