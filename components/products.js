const products = [
  {
    id: 0,
    title: "Base Plate Short Sleeve T-Shirt",
    slug: "t-shirt=men-base-plate-blended-short-sleeve",
    price: 34,
    color: ["light grey heather", " sandstone"],
    size: ["xl", "m", "s"],
    imgUrl: "/Men's Base Plate Blended Short Sleeve T-Shirt.jpg",
    desc: "71% Cotton, 29% Polyester.Imported.Pull On closure.Machine Wash.Timberland PRO's shirts make a serious function statement by offering wicking technologies plus comfort features, such as side-seam construction, bi-swing backs and tagless neck lables. Seasonal layering, Made comfortable and easy.Wicking polyester next-to-skin with rugged cotton face.Built-in 30+ UPF protection.TIMBERLAND PRO: Timberland PRO work shirts, work pants, jackets, shirts & more are made with the quality you've come to expect from Timberland PRO.",
    rating: 4.6,
    category: "men",
  },
  {
    id: 1,
    title: "Long Sleeve Mixed Material Shirt",
    slug: "t-shirt=men-long-sleeve-mixed-material",
    price: 54,
    color: ["vintage indigo"],
    size: ["xl", "m", "s"],
    imgUrl: "/Men's Long Sleeve Mixed Material Shirt.jpg",
    desc: "73% Nylon, 27% Polyester.Imported.Button closure.Machine Wash.MOISTURE WICKING. Made from a breathable mixed material utility blend, this shirt is designed to pull moisture away from the skin to keep you comfortable and dry during any activity. A vented back helps increase airflow.KNIT CONSTRUCTION. Contrast knit panels at the sides and sleeve allow extra stretch and ease of movement. A patent pending convertible sleeve system allows you to adjust the length.UV PROTECTION. UPF 30 offers built-in UV protection from the sun's harmful rays. Perfect for hiking to your favorite fishing spot, or out on the water, this shirt is ready for anything.",
    rating: 4.6,
    category: "men",
  },
  {
    id: 2,
    title: "Golf Short Sleeve Polo Shirt",
    slug: "t-shirt=men-performance-golf-grid-short-sleeve",
    price: 98.99,
    color: ["caneel bay", "candy pink"],
    size: ["xl", "m", "s"],
    imgUrl:
      "/Men's Performance Golf Grid Short Sleeve Stretch Polo Shirt-Legacy.jpg",
    desc: "100% Polyester.Short sleeve polo in tonal grid pattern featuring three-button placket and embroidered logo at left chest.Moisture wicking properties pull moisture away from the body keeping you dry and feeling cool.Swing Flex 4-Way Stretch fabric stretches both crosswise and lengthwise, allowing for maximum comfort in all directions, especially when perfecting your swing.Sun-Control with UPF-15 UV protective technology, so you can look sharp without worrying about the sun’s harmful rays.Easy care allows you to throw these on after washing",
    rating: 4.6,
    category: "men",
  },
  {
    id: 3,
    title: "Men's Short Sleeve Paris Polo",
    slug: "t-shirt=men-short-sleeve-paris-polo",
    price: 94.52,
    color: ["white", "black", "navy blue"],
    size: ["xl", "m", "s"],
    imgUrl: "/Men's Short Sleeve Paris Polo.jpg",
    desc: "100% Cotton.Button closure.A trim silhouette in between our 'Classic Fit' and 'Slim Fit'.Concealed two button placket for a sleek tailored finish.Ribbed polo collar and armbands.Tennis tail designed to stay tucked in.",
    rating: 4.6,
    category: "men",
  },
  {
    id: 4,
    title: "Women’s Stretch Cotton Tee",
    slug: "t-shirt=women-stretch-cotton-tee",
    price: 15.15,
    color: ["paleo pink", "black", "gray heather"],
    size: ["xl", "m", "s"],
    imgUrl: "/Women’s Stretch Cotton Tee.jpg",
    desc: "Women’s stretch cotton tee is made from super soft cotton-rich fabric. The comfortable fabric offers move-with-you style you’re sure to love.A flattering design, this cotton sleeve tee is designed with a wide, feminine scoop neckline.We recommends machine washing this women's shirt in cold water to help reduce energy consumption.",
    rating: 4.6,
    category: "women",
  },
  {
    id: 5,
    title: "Long Sleeve Turtleneck Shirt",
    slug: "t-shirt=women-long-sleeve-turtleneck-tee",
    price: 29.99,
    color: ["june bug", "true black", "white global"],
    size: ["xl", "m", "s"],
    imgUrl: "/Women's Long Sleeve Turtleneck Shirt.jpg",
    desc: "Dress-easy in the all-day comfort of this cotton top.long sleeve shirts are the ideal wardrobe staple.Easy to care for; this tee can be washed with like colors on the gentle cycle.Machine Wash.Imported stuff.",
    rating: 4.6,
    category: "women",
  },
  {
    id: 6,
    title: "Luxe Long Sleeve Neck T-Shirt",
    slug: "t-shirt=women-luxe-long-sleeve-crew-neck-tee",
    price: 34.95,
    color: ["black", "white", "pink"],
    size: ["xl", "m", "s"],
    imgUrl: "/Women's Luxe Long Sleeve Crew Neck Tee T-Shirt.jpg",
    desc: "95% Rayon, 5% Spandex.A plain long sleeve crewneck pullover that is a great addition to your wardrobe.The luxe jersey knit is soft, stretchy and won't shrink or fade from being washed.Easy to care for, this top can be washed with like colors on the gentle cycle.Imported.",
    rating: 4.6,
    category: "women",
  },
  {
    id: 7,
    title: "Women's Ribbed Long Sleeve Tee",
    slug: "t-shirt=women-ribbed-long-sleeve-tee",
    price: 122.27,
    color: ["black", "white"],
    size: ["xl", "m", "s"],
    imgUrl: "/Women's Ribbed Long Sleeve Tee.jpg",
    desc: "96% Modal, 4% Spandex.Luxe micro-rib knit with stretch.Won't shrink or fade from being washed.",
    rating: 4.6,
    category: "women",
  },
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