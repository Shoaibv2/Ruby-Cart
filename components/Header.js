import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="text-cyan-600 body-font bg-white shadow-sm mb-5">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Image src="/logo.png" width={180} height={70}></Image>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/men"} className="mr-10 hover:text-cyan-800 text-lg font-semibold">Men</Link>
          <Link href={"/women"} className="mr-10 hover:text-cyan-800 text-lg font-semibold">Women</Link>
          <Link href={"/teen"} className="mr-10 hover:text-cyan-800 text-lg font-semibold">Teen</Link>
          <Link href={"/kids"} className="mr-10 hover:text-cyan-800 text-lg font-semibold">Kids</Link>
        </nav>
        <button className="inline-flex items-center py-1 px-3 text-3xl mt-4 md:mt-0">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </header >
  )
}
