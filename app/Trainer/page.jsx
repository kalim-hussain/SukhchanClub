import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "./trainer.module.css";
import "../../app/globals.css";

// images
import Trainer1 from "../../public/trainer1.png";
import Trainer2 from "../../public/trainer2.png";
import Trainer3 from "../../public/trainer3.png";
import Trainer4 from "../../public/trainer4.png";
import Trainer5 from "../../public/trainer5.png";
import Trainer6 from "../../public/trainer6.png";
import Trainer7 from "../../public/trainer7.png";
import Trainer8 from "../../public/trainer8.png";
import Trainer9 from "../../public/trainer9.png";
import Trainer10 from "../../public/trainer10.png";

const Trainer = () => {
  const tainerData = [
    {
      img: Trainer1,
      name: "JOHN",
      desc: "Elite Trainer",
    },
    {
      img: Trainer2,
      name: "WAWERU",
      desc: "Elite Trainer",
    },
    {
      img: Trainer3,
      name: "PAUL",
      desc: "Elite Trainer",
    },
    {
      img: Trainer4,
      name: "SHAHZAD",
      desc: "Elite Trainer",
    },
    {
      img: Trainer5,
      name: "KAMRAN",
      desc: "Elite Trainer",
    },
    {
      img: Trainer7,
      name: "Benard Kimani",
      desc: "Elite Trainer",
    },
    {
      img: Trainer9,
      name: "MISBAH SAJAD",
      desc: "Lady Trainer",
    },
    {
      img: Trainer8,
      name: "SIMON",
      desc: "Elite Trainer",
    },

    {
      img: Trainer10,
      name: "ZEESHAN",
      desc: "Elite Trainer",
    },

    {
      img: Trainer6,
      name: "anothy wacheria",
      desc: "Elite Trainer",
    },
  ];

  return (
    <div>
      <div style={{ position: "relative", height: "120px" }}>
        <Navbar bg={"green"} DHALogo={false} />
      </div>
      <div className={`${styles.trainerMain} ${styles.container}`}>
        <h2>
          Our <span>Trainers</span>
        </h2>
        <p>
          Our executive gym is designed for those who demand the best in
          equipment and services. With state-of-the-art machines and
          personalized fitness plans from our highly trained fitness
          professionals, our members can achieve their fitness goals and stay
          motivated. Our executive gym is designed for those who demand the best
          in equipment and services. With state-of-the-art machines and
          personalized fitness plans from our highly trained fitness
          professionals, our members can achieve their fitness goals and stay
          motivated.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.cards} ${styles.container}`}>
          {tainerData.map((data) => {
            return (
              <>
                <div className={styles.trainerCard}>
                  <div className={styles.image}>
                    <Image priority
                      className={styles.trainerImg}
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <span>{data.name}</span>
                  <p>{data.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer DHALogo={false} />
    </div>
  );
};

export default Trainer;
