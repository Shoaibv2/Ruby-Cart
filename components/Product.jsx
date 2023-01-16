import products from "./products"
import Link from 'next/link'

const Products = (props) => {
  const filteredProducts = []

  props.category ?
    products.map(p => p.category === props.category && filteredProducts.push(p))
    : products.map(p => filteredProducts.push(p))

  const productList = []
  filteredProducts.map((product, key) => {
    productList.push(
      <div key={key} className="lg:w-1/4 p-4 md:w-1/2 w-full group mt-2">
        <Link href={"/product/" + product.slug}>
          <div className=" h-[288px] w-[288px] overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
            <img src={product.imgUrl} alt="t-shirt" className="object-cover object-center w-full h-full" />
          </div>
          <div className="mt-3 flex">
            <div className="">
              <span className="pl-[2px] text-sm font-medium text-gray-900">{product.title}</span>
              <p className="mt-1 text-sm text-gray-600 pl-[2px]">Shop Now</p>
            </div>

          </div>
        </Link>
      </div>
    )
  })

  console.log(productList)

  return (
    <div className="flex flex-wrap items-center -m-4">
      {productList}
    </div>
  )
}


export default Products