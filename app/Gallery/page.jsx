"use client";
import React, { useState } from "react";
import styles from "./gallery.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Image from "next/image";
// images
import galleryBg from "../../public/gallerybg.png";
import gImg1 from "../../public/g-img1.png";
import gImg2 from "../../public/g-img2.png";
import gImg3 from "../../public/g-img3.png";
import gImg4 from "../../public/g-img4.png";
import gImg5 from "../../public/g-img5.png";
import gImg6 from "../../public/g-img6.png";
import gImg7 from "../../public/g-img7.png";
import gImg8 from "../../public/g-img8.png";
import gImg9 from "../../public/g-img9.png";
import gImg10 from "../../public/g-img10.png";
import gImg11 from "../../public/g-img11.png";
import gImg12 from "../../public/g-img12.png";
import gImg13 from "../../public/g-img13.png";
import gImg14 from "../../public/g-img14.png";
import gImg15 from "../../public/g-img15.png";
import gImg16 from "../../public/g-img16.png";

const Gallery = () => {

  const GalleryData = [
    {
      img: gImg1,
    },
    {
      img: gImg2,
    },
    {
      img: gImg3,
    },
    {
      img: gImg4,
    },
    {
      img: gImg5,
    },
    {
      img: gImg6,
    },
    {
      img: gImg7,
    },
    {
      img: gImg8,
    },
  ];
  const GalleryData1 = [
    {
      img: gImg9,
    },
    {
      img: gImg10,
    },
    {
      img: gImg11,
    },
    {
      img: gImg12,
    },
    {
      img: gImg13,
    },
    {
      img: gImg14,
    },
    {
      img: gImg15,
    },
    {
      img: gImg16,
    },
  ];

  return (
    <div>
      <div className={styles.header}>
        <Navbar bg={"dark"} DHALogo={false} />
        <Image priority className={styles.background} src={galleryBg} alt="" />
        <div style={{ position: "absolute" }}>
          <h2>
            Our <span>Gallery</span>
          </h2>
        </div>
      </div>
      <div className={styles.gallery}>
        <h2>Main Branch</h2>
        <div className={`${styles.images} ${styles.container}`}>
          {GalleryData.map((data) => (
            <>
              <div className={styles.content}>
                <Image priority className={styles.imagebox} src={data.img} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <h2>DHA Branch</h2>
        <div className={`${styles.images} ${styles.container}`}>
          {GalleryData1.map((data) => (
            <>
              <div className={styles.content}>
                <Image priority className={styles.imagebox} src={data.img} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>


      <Footer DHALogo={false}/>
    </div>
  );
};

export default Gallery;
