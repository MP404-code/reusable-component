import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-4 space-x-4 border-b pb-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
