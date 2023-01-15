import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { getProduct } from "../../components/products";

function Product() {

  const router = useRouter()
  const slug = router.asPath.replace('/product/', '')
  const product = getProduct(slug)


  return (
    <div className='container mx-auto py-8'>
      <div className="flex items-center mb-5">
        <a href="#" className='mr-2 text-base font-medium text-gray-900'>Men <span className='h-5 w-4 text-gray-300'>\</span> </a>
        <a href="#" className='font-medium text-gray-500 hover:text-gray-600'>Basic T Shirt</a>
      </div>
      <div>
        <img src="/shirt-men-3.jpg" className="object-cover object-center rounded " />
        <div className="flex pt-10">
          <div className="w-3/4 pr-14">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}
            </h1>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 pl-1">
              <p className="text-lg text-gray-900 pt-5">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
              <h3 className="text-md font-medium text-gray-700">Highlights</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                </ul>
              </div>
              <div class="mt-10">
                <h2 class="text-base font-medium text-gray-700">Details</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl font-medium tracking-tight text-gray-900">$192</p>
            <h3 className="sr-only">Reviews</h3>
            <p className="flex pt-5"> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-200 h-5 w-5 flex-shrink-0" /> </p>
            <h2 className="mt-6 text-base font-medium text-gray-900">Color</h2>
            <div className="flex space-x-1 pt-3 items-center">
              <button className="border-2 border-gray-300  bg-blue-700 rounded-full w-9 h-9 focus:outline-none"></button>
              <button className="border-2 border-gray-300  bg-white-800 rounded-full w-[34px] h-[34px] focus:outline-none"></button>
              <button className="border-2 border-gray-300  bg-neutral-900 rounded-full w-9 h-9 focus:outline-none"></button>
            </div>
            <h2 className="mt-6 text-base font-medium text-gray-900">Size</h2>
            <div className="flex flex-wrap pt-2">
              <div className="lg:space-x-4 md:space-x-4">
                <button className="p-8 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">xs</button>
                <button className="p-9 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">s</button>
                <button className="p-9 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">m</button>
              </div>
              <div className="lg:space-x-4 md:space-x-4 mt-3">
                <button className="p-9 border rounded-md justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">l</button>
                <button className="p-8 border rounded-md justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">xl</button>
                <button className="p-8 border rounded-md justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">2xl</button>
              </div>
            </div>
            <div className="flex space-x-1 mt-8">
              <button className="lg:w-2/4 md:w-2/4 w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Buy Now</button>
              <button className="lg:w-2/4 md:w-2/4 w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Add To Cart</button>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Product