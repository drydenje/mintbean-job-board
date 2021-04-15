import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/search">Search</Link>
      <Link href="/documents">Documents</Link>
      <Link href="/applications">Current Applications</Link>
      <Link href="/logout">Logout</Link>
    </nav>
  );
}
