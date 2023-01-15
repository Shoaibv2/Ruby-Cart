const products = [
  {
    id: 0, title: 'Men\'s T-shirt', slug: 't-shirt-men-xyz', price: 0, color: [], size: [], imgUrl: '/shirt-men-3.jpg', desc: '', rating: 4.6, category: 'men'
  },
  { id: 1, title: 'Men\'s T-shirt', slug: 't-shirt-men-xy', price: 0, color: [], size: [], imgUrl: '/t-shirt-men-2.jpg', desc: '', rating: 4.6, category: 'men' },
  { id: 2, title: 'Men\'s T-shirt', slug: 't-shirt-men-xz', price: 0, color: [], size: [], imgUrl: '/shirt-men-5.jpg', desc: '', rating: 4.6, category: 'women' },
  { id: 3, title: 'Men\'s T-shirt', slug: 't-shirt-men-yz', price: 0, color: [], size: [], imgUrl: '/shirt-men-6.jpg', desc: '', rating: 4.6, category: 'men' }
]

const getProduct = (slug) => {
  let product = {}
  products.map((p) => {
    if (p.slug === slug) {
      product = p
    }
  })
  return product
}

// get slug from url
// const product = getProduct(slug)

export { getProduct }
export default products