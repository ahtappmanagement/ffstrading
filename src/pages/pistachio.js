import Image from "next/image";
import pistachio from "images/pistachio.jpg";
import Head from "next/head";
function Pistachio() {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS | pistachio</title>
      </Head>
      <h3 class="my-4">Pistachio</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={pistachio} alt="pistachio" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p class="text-justify">
            Pistachios are naturally dense food, but not only in energy it is
            also a great source for vitamins specially B vitamins like: vitamin
            B6 and thiamin and also vitamin K and E, except vitamins it has a
            large number of minerals for example calcium. Pistachios have
            different varieties and they can be sorted from size or shape (and
            also salted or flavored), and they are collected from the best
            materials, and the important thing is our pistachios are aflatoxin
            free.
          </p>
          <p>Here are all kinds of pistachios:</p>
          <ul>
            <li>FANDOGHI</li>
            <li>KALLE GHOUCHI</li>
            <li>AKBARI</li>
            <li>AHMAD AGHAEI</li>
            <li>BADAMI</li>
            <li>WHOLE PISTACHIO KERNEL</li>
            <li>GREEN PISTACHIO KERNEL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pistachio;
