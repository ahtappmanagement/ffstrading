import Image from "next/image";
import mazafati from "images/mazafati.jpg";
import Head from "next/head";
function Dates() {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS | dates</title>
      </Head>
      <h3 class="my-4">Dates</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={mazafati} alt="dates" />
        </div>
        <div class="col-md-8 col-sm-6">
          <p>
            Dates are the calorie-dense high-value type of fruit, and one of the
            most important things about Dates is: this special fruit contains a
            great level of Iron and it can cure Iron deficiency, and also Dates
            can increase strength and vitality in anemia. We have provided a
            large variety of Dates with the best quality in bulk and consumer
            pack (private label).
          </p>
          <p>Here are all kinds of Dates and Date’s Products:</p>
          <ul>
            <li>SAIR(SAYAR) DATES</li>
            <li>CHOPPED / SLICED DATES</li>
            <li>CHOPPED DATE PASTE</li>
            <li>DATE PASTE</li>
            <li>MAZAFATI DATES</li>
            <li>DATE SYRUP</li>
            <li>DATE LIQUID SUGAR</li>
            <li>PIAROM DATES</li>
            <li>ZAHEDI DATES</li>
            <li>RABBI DATES</li>
            <li>KABKAB DATES</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dates;
