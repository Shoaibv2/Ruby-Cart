import Head from "next/head";
import Products from "../components/Product";

function Women() {
  return (
    <>
      <Head>
        <title>Women</title>
      </Head>
      <div className="container md:py-16 py-8 px-4 mx-auto">
        <Products category="women" />
      </div>
    </>
  );
}

export default Women;
