import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruby Cart</title>
      </Head>
      <section>
        <div className="container py-16 px-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/shirt-men-3.jpg" alt="" className="object-cover object-center w-full h-full" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Basic T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className="h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/t-shirt-men-2.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/shirt-men-5.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/shirt-men-4.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/t-shirt-men.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/t-shirt-men.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/t-shirt-men.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
            <div className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
              <Link href={"/product/product"}>
                <div href="" className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                  <img src="/t-shirt-men.jpg" alt="" className="w-full h-full object-cover object-center" />
                </div>
              </Link>
              <a href="" className="mt-3 block">
                <span className="pl-[2px] text-sm font-medium text-gray-900">Trendy T-Shirt</span>
                <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
