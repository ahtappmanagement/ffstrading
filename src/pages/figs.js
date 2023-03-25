import Image from "next/image";
import figs from "images/figs.jpg";
import Head from "next/head";
function Figs() {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS |Figs</title>
      </Head>
      <h3 class="my-4">Dried Figs</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={figs} alt="figs" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p class="text-justify">
            Figs have a unique, sweet taste, soft and chewy texture, and are
            littered with slightly crunchy, edible seeds. figs are delicate and
            perishable, so they are often dried to preserve. This produces a
            sweet and nutritious dried fruit that can be enjoyed all year round.
            There are multiple different varieties of dried fig, all of which
            vary widely in color and texture. Their unique feature is a little
            bud-like opening called an ostiole at the top that helps the fruit
            develop. Their natural sweetness meant that, before the days of
            refined sugars, they were often used as a sweetener.
          </p>
        </div>
      </div>
    </>
  );
}

export default Figs;
