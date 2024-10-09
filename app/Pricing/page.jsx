import React from "react";
import Navbar from "../components/navbar.jsx";
import Pricingbg from "../../public/pricingbg.png";
import Image from "next/image";
import styles from "./pricing.module.css";
import "../globals.css";
import Footer from "../components/Footer";
import Download from "../../public/doenload.svg";

const Prices = [
  {
    priceCard: {
      heading: "GYM",
      details: [
        { item: "Executives Gym", price: 16000 },
        { item: "Personal Training -Male", price: 28000 },
        { item: "Personal Training -Female", price: 28000 },
        { item: "Personal Training -Member", price: 15000 },
        { item: "Personal Training -Member", price: 50000 },
      ],
    },
  },
  {
    priceCard: {
      heading: "LADIES GYM",
      details: [
        { item: "Ladies only Gym", price: 18000 },
        { item: "Personal Training -Female", price: 22000 },
        { item: "STEAM SAUANA", price: "" },
        { item: "Steam Sauna Per Month", price: 18000 },
        { item: "Steam Sauna Per Day", price: 22000 },
      ],
    },
  },
  {
    priceCard: {
      heading: " SQUASH COURT",
      details: [
        { item: "Squash Court Per Month", price: 15000 },
        { item: "Squash Court Personal Training ", price: 20000 },
        { item: "Squash Court Personal Training", price: 15000 },
        { item: "SNOOKER", price: "" },
        { item: "Snooker Per Hour", price: 3000 },
      ],
    },
  },
];
const Prices2 = [
  {
    priceCard: {
      heading: "SPA SERVICES",
      heading2: "SWEDISH MASSAGE",
      details: [
        { item: "30 Minutes", price: 5500 },
        { item: "60 Minutes", price: 6500 },
        { item: "90 Minutes", price: 8800 },
        { item: "THAI MASSAGE", price: "" },
        { item: "30 Minutes", price: 5800 },
        { item: "60 Minutes", price: 6800 },
        { item: "90 Minutes", price: 9300 },
      ],
    },
  },
  {
    priceCard: {
      heading: "SALOON PRICE LIST",
      heading2: "THREADING",
      details: [
        { item: "Ear Wax", price: 500 },
        { item: "For Head Threading", price: 400 },
        { item: "Eyebrow Shape", price: 350 },
        { item: "Upper Lip Threading", price: 300 },
        { item: "Face Wax", price: 1500 },
        { item: "Chin Wax", price: 700 },
        { item: "Cheeks Wax", price: 700 },
      ],
    },
  },
  {
    priceCard: {
      heading: "NINAS AESTHETICS",
      heading2: "COSMETIC TREATMENTS",
      details: [
        { item: "Hydra Facial", price: 10000 },
        { item: "Age Defense", price: 12500 },
        { item: "Ultra Glow", price: 12500 },
        { item: "Power Bright", price: 15000 },
        { item: "Express Glow", price: 8000 },
        { item: "Oxygen Facial", price: 9000 },
        { item: "Black & White Facial", price: 6000 },
      ],
    },
  },
];

const Pricing = () => {
  return (
    <div>
      <div className={styles.header}>
        <Navbar bg={"dark"} DHALogo={false} />
        <Image priority className={styles.background} src={Pricingbg} alt="" />
        <div style={{ position: "absolute" }}>
          <h2>
            Pricing
          </h2>
        </div>
      </div>
      <div className={`${styles.trainerMain} ${styles.container}`}>
        <h2>
          Best Prices <span>for you</span>
        </h2>
        <p>
          Our executive gym is designed for those who demand the best in
          equipment and services. With state-of-the-art machines and
          personalized fitness plans from our highly trained fitness
          professionals, our members can achieve their fitness goals and stay
          motivated. Our executive gym is designed for those who demand the be
        </p>
      </div>
      <h2 className={styles.heading}>LATEST RATE LIST 2023</h2>
      <div className={`${styles.cards} ${styles.container}`}>
        {Prices.map((pCard) => {
          return (
            <>
              <div className={styles.card}>
                <h3>{pCard.priceCard.heading}</h3>
                <span>Details</span>
                <ul>
                  {pCard.priceCard.details.map((detail) => (
                    <>
                      <li>
                        <span>{detail.item}</span>
                        {detail.price}
                      </li>
                    </>
                  ))}
                </ul>
                <button>
                  <a href="/SukhchanPricelist.pdf" download target="_blank">
                    For more details <Image priority src={Download} alt="" />
                  </a>
                </button>
              </div>
            </>
          );
        })}
      </div>
      <h2 className={styles.heading}>
        SUKH CHAN WELLNESS CLUB SPA / SALOON AND ASTHETICS
      </h2>
      <div className={`${styles.cards} ${styles.container}`}>
        {Prices2.map((pCard) => {
          return (
            <>
              <div className={styles.card}>
                <h3>{pCard.priceCard.heading}</h3>
                <h3>{pCard.priceCard.heading2}</h3>
                <span>Details</span>
                <ul>
                  {pCard.priceCard.details.map((detail) => (
                    <>
                      <li>
                        <span>{detail.item}</span>
                        {detail.price}
                      </li>
                    </>
                  ))}
                </ul>
                <button>
                  <a href="/Pricelist.pdf" download target="_blank">
                    For more details <Image priority src={Download} alt="" />
                  </a>
                </button>
              </div>
            </>
          );
        })}
      </div>
      <Footer DHALogo={false} />
    </div>
  );
};

export default Pricing;
