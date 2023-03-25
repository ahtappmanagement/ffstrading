import Image from "next/image";
import freezeDried from "images/freezeDried.jpg";
import Head from "next/head";
function FreezeDried() {
  return (
    <>
          <Head>
        <title>FORTUNE FOODS | freeze dried</title>
      </Head>
      <h3 class="my-4">Freeze Dried Fruit & Vegetable</h3>
      <div class="row mb30">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={freezeDried} alt="" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p>Here are all kinds of Freeze Dried :</p>
          <div class="row col-md-12">
            <div class="col-md-6">
              <p class="vegetable">Vegetables</p>
              <ul>
                <li>OKRAS</li>
                <li>BROCCOLI</li>
                <li>ONIONS</li>
                <li>TOMATOS</li>
                <li>MUSHROOMS</li>
                <li>ZUCCHINI</li>
                <li>GREEN BEANS</li>
              </ul>
            </div>
            <div class="col-md-6">
              <p class="fruit">Fruits</p>
              <ul>
                <li>APRICOTS</li>
                <li>NECTARINES</li>
                <li>PEACHES</li>
                <li>APPLE</li>
                <li>KIWI</li>
                <li>PUMPKINS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreezeDried;
