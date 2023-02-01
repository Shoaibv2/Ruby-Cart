import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";

export default function Header() {
  const ref = useRef();
  function toggleClick() {
    if (ref.current.classList.contains("scale-x-100")) {
      ref.current.classList.remove("scale-x-100");
      ref.current.classList.add("scale-x-0");
    } else if (!ref.current.classList.contains("scale-x-100")) {
      ref.current.classList.remove("scale-x-0");
      ref.current.classList.add("scale-x-100");
    }
  }
  return (
    <header className="text-cyan-600 body-font bg-white shadow-sm mb-5 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img src="/logo.png" width="180px" height="70" alt="" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/men"}
            className="mr-10 hover:text-cyan-800 text-lg font-semibold"
          >
            Men
          </Link>
          <Link
            href={"/women"}
            className="mr-10 hover:text-cyan-800 text-lg font-semibold"
          >
            Women
          </Link>
          <Link
            href={"/teen"}
            className="mr-10 hover:text-cyan-800 text-lg font-semibold"
          >
            Teen
          </Link>
          <Link
            href={"/kids"}
            className="mr-10 hover:text-cyan-800 text-lg font-semibold"
          >
            Kids
          </Link>
        </nav>
        <button className="inline-flex items-center py-1 px-3 text-3xl mt-4 md:mt-0">
          <AiOutlineShoppingCart onClick={toggleClick} />
        </button>
        <div
          ref={ref}
          className="absolute top-0 right-0 p-5 bg-cyan-50 shadow-lg transform transition-transform scale-x-0 origin-right"
        >
          <button className="cyan-400 absolute top-1 right-1 text-lg">
            <AiFillCloseCircle onClick={toggleClick} />
          </button>
          <div>
            <ul>
              <li className="flex space-x-2 my-4">
                <div className="w-1/6">
                  <div className="h-[50px] w-[50px] overflow-hidden">
                    <img
                      src="/Men's Performance Golf Grid Short Sleeve Stretch Polo Shirt-Legacy.jpg"
                      alt=""
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                <div className="w-5/6">
                  <h4 className="text-black font-semibold">
                    Golf Short Sleeve Polo Shirt
                  </h4>
                  <span className="text-gray-500 text-sm">$98</span>
                </div>
              </li>
              <hr className="h-px bg-gray-300 border-0" />
              <li className="flex space-x-2 my-4">
                <div className="w-1/6">
                  <div className="h-[50px] w-[50px] overflow-hidden">
                    <img
                      src="/Men's Base Plate Blended Short Sleeve T-Shirt.jpg"
                      alt=""
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                <div className="w-5/6">
                  <h4 className="text-black font-semibold">
                    Base Short Sleeve T-Shirt
                  </h4>
                  <span className="text-gray-500 text-sm">$34</span>
                </div>
              </li>
              <hr className="h-px bg-gray-300 border-0" />
              <li className="flex space-x-2 my-4">
                <div className="w-1/6">
                  <div className="h-[50px] w-[50px] overflow-hidden">
                    <img
                      src="/Men's Short Sleeve Paris Polo.jpg"
                      alt=""
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                <div className="w-5/6">
                  <h4 className="text-black font-semibold">
                    Men's Short Sleeve Paris Polo
                  </h4>
                  <span className="text-gray-500 text-sm">$94</span>
                </div>
              </li>
            </ul>
            <button className="w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 p-1 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-1">
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
