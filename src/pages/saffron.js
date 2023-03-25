import Image from "next/image";
import saffron from "images/saffron.jpg";
import Head from "next/head";
function Saffron() {
  return (
    <>
          <Head>
        <title>FORTUNE FOODS | saffron</title>
      </Head>
      <h3 class="my-4">Saffron</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={saffron} alt="saffron" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p>
            The spice originates from a flower called crocus sativus—commonly
            known as the "saffron crocus." Our saffron is provided in two
            different ways bulk and consumer pack (private label), and also we
            cover all different part of saffron flower. It can be used in
            different dishes and different kind of foods recipes. Saffron has a
            good effects in human health like: it boosts energy, protects heart
            health, improves bone strength, and also improves nerve function.
          </p>
        </div>
      </div>
    </>
  );
}

export default Saffron;
