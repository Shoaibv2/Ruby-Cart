import Head from "next/head";
import Products from "../components/Product";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruby Cart</title>
      </Head>
      <section>
        <div className="container md:py-16 py-8 px-4 mx-auto">
          <Products sortBy="none" />
        </div>
      </section>
    </>
  );
}
