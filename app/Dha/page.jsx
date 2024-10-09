"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "./dha.module.css";
import Phone from "../../public/dphone.svg"
import mail from "../../public/dmail.svg"
import download from "../../public/download.svg"
import dhaBacground from "../../public/dha-background.png";
// images
import dhaBg1 from "../../public/dha-bg1.png";
import dhaBg2 from "../../public/dha-bg2.png";
import dhaBg3 from "../../public/dha-bg3.png";
import dhaBg4 from "../../public/dha-bg4.png";

import dhaImg1 from "../../public/dha-img1.png";
import dhaImg2 from "../../public/dha-img2.png";
import dhaImg3 from "../../public/dha-img3.png";
import dhaImg4 from "../../public/dha-img4.png";
import dhaImg5 from "../../public/dha-img5.png";
import dhaImg6 from "../../public/dha-img6.png";

const DHA = () => {
  // State variables for form fields
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form data
    // API will call here

    // Reset the form fields
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <div>
      <div className={styles.header}>
        <Navbar bg={"dark"} DHALogo={true} />
        <Image priority className={styles.background} src={dhaBacground} alt="" />
        <div style={{ position: "absolute" }}>
          <h2>
            THE GOOD LIFE BY <span>SUKH CHAN WELLNESS CLUB</span>
          </h2>
          <p>
            <span>A HOLISTIC</span> WELLNESSEXPERIENCE
          </p>
        </div>
      </div>
      {/* servives starts here */}
      <div
        className={`${styles.dhacards} ${styles.color} ${styles.backgroundColor}`}
      >
       
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg1} alt="" />

          <div className={styles.innerContent}>
            <h3>LUXURIOUS AMENITIES AND TRANQUIL AMBIANCE</h3>
            <p>
              At The Good Life, every aspect has been carefully curated to
              provide an unparalleled wellness experience. From the moment you
              step through the doors, you are greeted with an ambiance that
              exudes peace, luxury, and a deep dedication to personal growth.
              The establishment represents a haven of tranquility, where
              individuals can escape the stresses of daily life and immerse
              themselves in a serene environment.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.dhacards} ${styles.backgroundColor}`}
      >
        <Image priority className={styles.imgBackground} src={dhaBg1} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg2} alt="" />

          <div className={styles.innerContent}>
            <h3>FITNESS SOLUTIONS FOR ALL AGES AND GENDERS</h3>
            <p>
              The Good Life goes beyond just providing a gym; it offers
              top-notch fitness solutions for individuals of all ages and
              genders. The establishment features a state-of-the-art gym
              equipped with cutting-edge machines and equipment. Whether you
              {"'"}re a beginner or an experienced fitness enthusiast, you can
              find tailored fitness plans and programs to suit your specific
              needs and goals. The gym is staffed by a team of foreign-trained
              professional trainers who bring expertise and international
              standards to their training sessions.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.dhacards}>
        <Image priority className={styles.imgBackground} src={dhaBg2} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg3} alt="" />

          <div className={styles.innerContent}>
            <h3>SCHEDULED AEROBICS CLASSES FOR CARDIOVASCULAR HEALTH</h3>
            <p>
              In addition to the gym, The Good Life offers scheduled Aerobics
              Classes designed to promote cardiovascular health, endurance, and
              overall fitness. These classes provide a dynamic and engaging
              workout that can be tailored to your fitness level. Whether you
              {"'"}re looking to improve your cardiovascular fitness, lose
              weight, or simply have fun while working out, the Aerobics Classes
              at The Good Life offer an excellent opportunity to achieve your
              fitness goals.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.dhacards} ${styles.color} ${styles.backgroundColor}`}
      >
        
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg4} alt="" />

          <div className={styles.innerContent}>
            <h3>EXCEPTIONAL SERVICE AND PROFESSIONAL STAFF</h3>
            <p>
              The professional staff at The Good Life plays a crucial role in
              ensuring a seamless and enjoyable fitness experience. They are
              dedicated to providing exceptional service, offering guidance, and
              addressing any concerns or queries that members may have. With
              their support, individuals can feel confident and motivated on
              their wellness journey. The Good Life takes pride in its
              commitment to delivering excellence in fitness and creating a
              welcoming environment for all.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.dhacards} ${styles.backgroundColor}`}
      >
        <Image priority className={styles.imgBackground} src={dhaBg3} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg5} alt="" />

          <div className={styles.innerContent}>
            <h3>EXQUISIT SPA AND BEAUTY PARLOR</h3>
            <p>
              At The Good Life, wellness extends beyond the gym and fitness
              classes. The establishment also features an indulgent Spa and
              Beauty Parlor, where individuals can find ultimate relaxation and
              rejuvenation. The spa provides a sanctuary of serenity, offering a
              range of indulgent treatments to restore balance and enhance
              well-being. From soothing massages to revitalizing facials, the
              Spa and Beauty Parlor at The Good Life are dedicated to providing
              transformative experiences that nurture both body and mind
            </p>
          </div>
        </div>
      </div>

      <div className={styles.dhacards}>
        <Image priority className={styles.imgBackground} src={dhaBg4} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={dhaImg6} alt="" />

          <div className={styles.innerContent}>
            <h3>OPEN TO ALLCUSTOMERS, MEMBERS, AND NON-MEMBERS</h3>
            <p>
              The Good Life believes in inclusivity and making wellness
              accessible to everyone. All the facilities, including the gym,
              Aerobics Classes, Spa and Beauty Parlor, and the café, are open to
              all customers, whether they are members or non-members. The
              establishment welcomes individuals from all walks of life,
              encouraging them to experience the luxury and benefits of a
              holistic wellness journey at The Good Life.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Subscriptionform}>
        <form onSubmit={handleSubmit}>
          <h3>
            FRANCHISE <span>SUPPORT</span>
          </h3>
          <p>
            As your franchisor, we aim to provide you with the knowledge and
            expertise needed to establish and run a thriving wellness club.
          </p>
          <div className={styles.feildRow}>
            <div className={styles.input}>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
              />
              <Image priority className={styles.dhaIcon} src={Phone} alt=""/>
            </div>
            <div className={styles.input}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />
              <Image  priority className={styles.dhaIcon} src={mail} alt=""/>
            </div>
            <button type="submit">Download Pdf <Image priority src={download} alt=""/></button>
          </div>
        </form>
      </div>
      <Footer DHALogo={true}/>
    </div>
  );
};

export default DHA;
