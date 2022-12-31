import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="text-cyan-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"} className="flex md:justify-start justify-center ">
              <Image src="/logo.png" width={210} height={100} />
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-800 tracking-widest text-sm mb-1">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Men</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Women</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Teen</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Kids</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cyan-800 tracking-widest text-sm mb-1">Customer Care</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Help Center</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Returns & Refunds</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Contact Us</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Purchase Protection</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">

              <nav className="list-none mb-10 mt-5">
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">About Us</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-cyan-600 hover:text-cyan-800">Privacy Policy</a>
                </li>

              </nav>
            </div>

          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-cyan-500 text-sm text-center sm:text-left">© 2023 RubyCart —
              <a href="https://twitter.com/shoaibkhanv2" rel="noopener noreferrer" className="text-cyan-600 ml-1" target="_blank">@shoaibkhanv2</a>
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}
