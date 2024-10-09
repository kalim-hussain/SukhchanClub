import React from "react";
import styles from "./app.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import aboutImg1 from "../../public/about-img1.png";
import aboutImg2 from "../../public/aboutImg2.png";
import background from "../../public/about-background.png";
import "../../app/globals.css";
import Navbar from "../components/navbar.jsx";

const About = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar bg={"green"} DHALogo={false} />
      </div>
      <div className={`${styles.aboutContent} ${styles.container}`}>
        <div className={styles.innerContent}>
          <h2>
            About<span> Sukh Chan</span>
          </h2>
          <p>
            Sukh Chan Wellness Club is a pioneering wellness center that offers
            a unique and holistic approach to health and fitness. Established in
            2005, the club is located in the heart of Lahore, Pakistan, and
            provides a variety of facilities under one roof to help members
            achieve their health and wellness goals. Sukh Chan Wellness Club has
            also expanded to offer The Good Life by Sukh Chan, another branch
            located in the center of Defence Lahore. The Good Life by Sukh Chan
            is a luxurious, state-of-the-art facility that caters to individuals
            who seek an exclusive wellness experience.
          </p>
          
        </div>
        <div className={styles.innerImage}>
          <Image priority className={styles.aboutImg} src={aboutImg1} alt="" />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "#F8FFF6",
        }}
      >
        <div style={{ position: "absolute", height: "100%", width: "100vw" }}>
          <Image priority className={styles.background} src={background} alt="" />
        </div>
        <div className={`${styles.aboutContent} ${styles.container}`}>
          <div className={styles.innerImage}>
            <Image
              priority
              className={`${styles.aboutImg} ${styles.aboutImg2}`}
              src={aboutImg2}
              alt=""
            />
          </div>
          <div className={styles.innerContent}>
            <div>
              <h3>
                Mission &<span>Values</span>
              </h3>
              <p>
                Sukh Chan Wellness Club{"'"}s mission is to provide a conducive
                and congenial environment to everyone and stand out in the
                wellness industry by empowering its esteemed members to aspire
                and manifest positive transformation in their lives. The club is
                committed to excellence and leadership in providing a wide
                variety of facilities related to wellness under one roof to
                ensure its members realize the fullest potential of their
                well-being. Sukh Cha{"'"}n adheres to the very essence of
                wellbeing and believes that within a healthy body resides a
                healthy mind.
              </p>
            </div>
            <div>
              <h3>
                Supportive <span>Community</span>
              </h3>
              <p>
                Sukh Cha{"'"}n Wellness Club is committed to people, the planet,
                and profit in everything it does, helping the communities around
                its clubs thrive. The club also believes in creating a healthy
                society by promoting awareness about health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer DHALogo={false} />
    </div>
  );
};

export default About;
