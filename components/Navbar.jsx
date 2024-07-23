import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="text-red-500 hover:underline font-poppins ">Home</Link>
        </li>
        <li className="ml-auto">
          <Link href="/Blog" className="text-red-500 hover:underline font-poppins " >Blog</Link>
        </li>
        <li>
          <Link href="/About"  className="text-red-500 hover:underline font-poppins  " >About</Link>
        </li>
        <li>
          <Link href="/Contact" prefetch={false}  className="text-red-500 hover:underline" >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
