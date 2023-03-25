import Image from "next/image";
import raisins from "images/raisins.jpg";
import Head from "next/head";
function Raisins() {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS | raisins</title>
      </Head>
      <h3 class="my-4">Raisins/Sultanas</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={raisins} alt="raisins" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p class="text-justify">
            Raisins or dried grape can be produced in many regions all around
            the world, raisins are a good source of dietary fiber, and it has
            different varieties like sultanas, Golden Raisins, and etc. Our
            raisins are selected from the best and high-quality raw materials
            with high standards.
          </p>
          <p>Here are all kinds of raisins / sultanas:</p>
          <ul>
            <li>SULTANA RAISINS NO.9</li>
            <li>SULTANA RAISINS LIGHT NO.10</li>
            <li>SUN DRIED RAISINS (THOMPSON)</li>
            <li>GOLDEN RAISINS</li>
            <li>GREEN KASHMAR RAISINS</li>
            <li>GOLDEN KASHMAR RAISINS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Raisins;
