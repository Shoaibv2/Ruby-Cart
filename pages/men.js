import Head from "next/head";
import Products from "../components/Product";

function Men() {
  return (
    <>
      <Head>
        <title>Men</title>
      </Head>
      <div className="container py-16 px-4 mx-auto">
        <Products category="men" />
      </div>
    </>
  );
}

export default Men;
