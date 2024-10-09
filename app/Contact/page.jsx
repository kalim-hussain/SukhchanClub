"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./contact.module.css";
import Navbar from "../components/navbar.jsx";
import ContactBg from "../../public/contactpagebg.png";
import Image from "next/image";
import "../globals.css";
import Footer from "../components/Footer";
import contactSlider1 from "../../public/contact-slider1.png";
import contactSlider2 from "../../public/contact-slider2.png";
import contactSlider3 from "../../public/contact-slider3.png";
import contactSlider4 from "../../public/contact-slider4.png";
import contactSlider5 from "../../public/contact-slider5.png";
import contactSlider6 from "../../public/contact-slider6.png";
import contactSlider7 from "../../public/contact-slider7.png";

import { Autoplay } from "swiper";
const Contact = () => {
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
    <>
      <div>
        <div style={{ position: "relative", height:"370px" }}>
          <Navbar bg={"dark"} DHALogo={false} />
          <Image priority
            className={styles.background}
            height={370}
            src={ContactBg}
            alt=""
          />
          <div className={styles.header}>
            <h2>
              Contact <span>Us</span>
            </h2>
          </div>
        </div>
        <div className={styles.contactform}>
          <form onSubmit={handleSubmit}>
            <h3>
              PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
            </h3>
            <div className={styles.feildRow}>
              <div className={styles.input}>
                <input
                  type="text"
                  id="name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className={styles.input}>
                <input
                  type="text"
                  id="name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className={styles.feildRow}>
              <div className={styles.input}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.input}>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className={styles.messageBox}>
              <div className={styles.input}>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.contactSlider}>
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            loop={true}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles["mySwiper"]}
          >
            <SwiperSlide>
              <Image priority
                src={contactSlider1}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider2}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider3}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider4}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider5}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider6}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider7}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider1}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider2}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider3}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider4}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider5}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider6}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority
                src={contactSlider7}
                width={228}
                height={292}
                style={{ objectFit: "fill" }}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.subscribtion}>
          <h2>
            Make perfect & healthy <br /> body. Subscribe Today!
          </h2>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <Footer DHALogo={false}/>
      </div>
    </>
  );
};

export default Contact;
