import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS | const</title>
      </Head>
      <div class="row">
        <div class="col-md-6">
          <h3 class="my-4">About Fortune Foods</h3>
          <p>
            <b>Fortune Foods </b> is the Key well known Trader of Dried Fruits &
            Nuts in the world. We select our materials from selected FSSC 22000
            and IFS approved manufacturers all around the world with highest
            Quality. at <b>Fortune Foods </b> we recognize and accept our
            trading responsibilities for ensuring the continued safety of
            products which are supplied by the best quality approved suppliers.
          </p>
          <p>
            <b> Fortune Foods </b> is creating real value that can be sustained
            over the long term and to form lasting relationships which enable
            all our customer’s requirements to be met. By all of the activities
            regarding <b>SUPPLIER EVALUATION</b>, We ensure that the highest
            standards of food sorting & packaging and hygiene rules are
            maintained by our services.
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="my-4">Contact Us</h3>
          <h4 class="address my-4"> Address :</h4>
          <p>
            <i class="bi bi-house-door"></i> Unit 103, Dubai Silicon Oasis-IFZA,
            DDP, Building A2, Dubai UAE{" "}
          </p>
          <h4 class="address"> Phone :</h4>
          <p>
            <i class="bi bi-whatsapp"></i> +971 50 554 8664{" "}
          </p>
          <h4 class="address"> Email :</h4>
          <p>
            <i class="bi bi-envelope"></i> info@FFSTRADING.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
