import React from "react";
import styles from "./message.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import CEOImage from "../../public/ceo.png";
import Director from "../../public/director.png";
import Navbar from "../components/navbar.jsx";
import YIcon from "../../public/youtube.svg"
import "../../app/globals.css";

const Message = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "120px" }}>
        <Navbar bg={"green"} DHALogo={false} />
      </div>
      <div className={`${styles.messageContent} ${styles.container}`}>
        <div className={styles.innerContent}>
          <h2>CEO’s Message</h2>
          <p>
            “Embark on a transformative wellness journey at Sukh Chan Wellness
            Club, the trailblazers of Pakistan{"'"}s wellness scene. We merge
            mind, body, and soul, empowering you to achieve balance and
            fulfillment. Discover cutting-edge fitness equipment, diverse
            classes, soothing spas, and nourishing cuisine. We pioneer
            prevention and positive change, driven by integrity, excellence, and
            leadership. Serving our community is an honor we cherish. Join us on
            this extraordinary adventure of wellness. Trust and support Sukh
            Chan Wellness Club, where dreams become reality.”
          </p>

          <a href="https://www.youtube.com/@sukhchanwellnessclub538">
            <Image src={YIcon} alt=""/>
            <span>https://www.youtube.com/@sukhchanwellnessclub538</span>
          </a>
          <span>Ms. Nina Akbar</span>
        </div>
        <div className={styles.innerImage}>
          <Image priority className={styles.aboutImg} src={CEOImage} alt="" />
        </div>
      </div>
      <div style={{ background: "#F8FFF6" }}>
        <div className={`${styles.messageContent} ${styles.container}`}>
          <div className={styles.innerImage}>
            <Image priority className={styles.aboutImg} src={Director} alt="" />
          </div>
          <div className={styles.innerContent}>
            <h2>Managing Director’s Message</h2>
            <p>
              “Our mission is to feel you at home while you reach your wellness
              goals. With top-notch facilities and world class trainers, we are
              committed to provide personalized attention to each member.
              Experience a holistic wellness journey that nourishes your body,
              mind, and soul. Unwind, exercise, and connect with like-minded
              individuals in our exceptional space. Thankyou for choosing us as
              your wellness partner. We are excited to join you on this
              incredible journey.”
            </p>
            <span>Mr. Syed Fahmeed Kamil</span>
          </div>
        </div>
      </div>
      <Footer DHALogo={false}/>
    </div>
  );
};

export default Message;
