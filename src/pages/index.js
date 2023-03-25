import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import trade from '../../images/trade.jpg'
import Products from "./products";
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>FORTUNE FOODS</title>
      </Head>
      <div className="row">
        <div className="col-md-12">
          <Image className="img-fluid" src={trade} alt=""/>
        </div>
        <div className="col-md-12">
          <h3 className="my-4">About Us</h3>
          <p>
            <b>Fortune Foods</b> is the Key well known Trader of Dried Fruits &
            Nuts in the world.We select our materials from selected FSSC 22000
            and IFS approved manufacturers all around the world with highest
            Quality.at <b>Fortune Foods</b> we recognize and accept our trading
            responsibilities for ensuring the continued safety of products which
            are supplied by the best quality approved suppliers.
          </p>
          <p>
            <b>Fortune Foods </b>is creating real value that can be sustained
            over the long term and to form lasting relationships which enable
            all our customer’s requirements to be met.By all of the activities
            regarding <b>SUPPLIER EVALUATION </b>, We ensure that the highest
            standards of food sorting & packaging and hygiene rules are
            maintained by our services.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="my-4">Our VISION & MISSION</h3>
          <p>
            This is our vision to provide the best quality approved natural
            products for all of the world. And this is our mission to corporate
            with suppliers which are in compliance with EU regulations and loyal
            to their obligations. We are the KEY well known trader of Dried
            Fruits and Nuts such as Pistachios, Raisins,Dried Apricots,Dried
            Apples, Figs, Dates and Dates Product.
          </p>
        </div>
      </div>
      <Products/>
    </>
  );
}
export default Home;

