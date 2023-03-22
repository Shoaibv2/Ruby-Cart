import Head from "next/head";
import Products from "../components/Product";

function Kids() {
  return (
    <>
      <Head>
        <title>Kids</title>
      </Head>
      <div className="container md:py-16 py-8 px-4 mx-auto">
        <Products category="kids" />
      </div>
    </>
  );
}

export default Kids;
