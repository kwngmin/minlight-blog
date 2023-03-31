import Link from "next/link";

export default function Header() {
  return (
    <>
      <span>minlight</span>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>about</li>
        <li>posts</li>
        <li>contact</li>
      </ul>
    </>
  );
}
