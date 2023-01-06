import { AiFillStar } from "react-icons/ai";

function Product() {
  return (
    <div className='container mx-auto py-8'>
      <div className="flex items-center mb-5">
        <a href="#" className='mr-2 text-base font-medium text-gray-900'>Men <span className='h-5 w-4 text-gray-300'>\</span> </a>
        <a href="#" className='font-medium text-gray-500 hover:text-gray-600'>Basic T Shirt</a>
      </div>
      <div>
        <img src="/shirt-men-3.jpg" className="object-cover object-center rounded " />
        <div className="flex pt-10">
          <div className="w-3/4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack
            </h1>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 pl-1">
              <p className="text-base text-gray-900 pt-5">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
              <h3 className="text-md font-medium text-gray-700">Highlights</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl font-medium tracking-tight text-gray-900">$192</p>
            <h3 className="sr-only">Reviews</h3>
            <p className="flex pt-5"> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-200 h-5 w-5 flex-shrink-0" /> </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product