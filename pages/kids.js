import Head from "next/head";
import Products from "../components/Product";

function Kids() {
  return (
    <>
      <Head>
        <title>Kids</title>
      </Head>
      <div className="container py-16 px-4 mx-auto">
        <Products category="kids" />
      </div>
    </>
  );
}

export default Kids;
