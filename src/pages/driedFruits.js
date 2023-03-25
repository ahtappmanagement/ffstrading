import Image from "next/image";
import apple from "images/apple.jpg"
function DriedFruits() {
  return (
    <>
      <h3 class="my-4">Dried Fruits- Apples</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Image class="img-fluid" src={apple} alt="DRIED FRUITS"/>
        </div>
        <div class="col-md-8 col-sm-6">
          <p class="text-justify">
            AHT Trading provides the best-dried apples which are produced and
            supplied by the FSSC 22000, IFS, and HACCP approved suppliers and
            producers. Fresh high-quality apples are picked from the
            best-qualified farms. Then it will be sorted, processed, dried, and
            packed by evaluated manufacturers.
          </p>
          <p class="text-justify">
            This delicious product is provided in 2 types: Ring and chopped.
          </p>
          <p class="text-justify">
            Quality is an excellent source of vitamins, fiber, and minerals
            specially potassium and iron.
          </p>
          <p class="text-justify">
            All kinds of microbiological, chemical, physical items are tested on
            this product and inspected, verified, and approved by Third-party
            auditors, Quality experts, and ISO17025 Accredited laboratory.
          </p>
        </div>
      </div>
    </>
  );
}

export default DriedFruits;
