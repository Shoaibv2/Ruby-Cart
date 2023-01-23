import Head from "next/head";
import Products from "../components/Product";

function Teen() {
  return (
    <>
      <Head>
        <title>Teen</title>
      </Head>
      <div className="container py-16 px-4 mx-auto">
        <Products category="teen" />
      </div>
    </>
  );
}

export default Teen;
