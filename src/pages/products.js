import products from "../../images/index";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
function Products() {
  const {
    mazafati,
    pistachio,
    raisins,
    saffron,
    apple,
    herbal,
    barberries,
    figs,
    freezeDried,
  } = products;
  return (
    <>
      <Head>
        <title>FORTUNE FOODS | produces</title>
      </Head>

      <div className="mb-5">
        <h3 class="my-4">Products</h3>

        <div class="row product">
          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/dates">
              <Image class="img-fluid" src={mazafati} alt="mazafati" />
              <h3>DATES</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/pistachio">
              <Image class="img-fluid" src={pistachio} alt="Pistachio" />
              <h3>PISTACHIOS</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/raisins">
              <Image class="img-fluid" src={raisins} alt="raisins" />
              <h3>RAISINS/SULTANAS</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/driedFruits">
              <Image class="img-fluid" src={apple} alt="apple" />
              <h3>DRIED FRUITS</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/saffron">
              <Image class="img-fluid" src={saffron} alt="Saffron" />
              <h3>SAFFRON</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/">
              <Image class="img-fluid" src={barberries} alt="barberries" />
              <h3>BARBERRIES</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/">
              <Image class="img-fluid" src={herbal} alt="herbal" />
              <h3>HERBAL TEA</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/figs">
              <Image class="img-fluid" src={figs} alt="figs" />
              <h3>FIGS</h3>
            </Link>
          </div>

          <div class="col-md-4 col-sm-6 mb-4">
            <Link href="/freezeDried">
              <Image class="img-fluid" src={freezeDried} alt="freezeDried" />
              <h3>
                FREEZE DRIED <br />
                FRUITS & VEGETABLES
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
