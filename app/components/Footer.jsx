"use client";
import React, { useState } from "react";
import Styles from "../styles/footer.module.css";
import Image from "next/image";
import FootLogo from "../../public/logo.svg";
import FootLogo1 from "../../public/dhalogo.svg";
// import twitterLogo from "../../public/twitter.svg";
import linkedinLogo from "../../public/linkedin.svg";
import instagramLogo from "../../public/instagram.svg";
import facebookLogo from "../../public/facebook.svg";
import latestImg from "../../public/latest-image.svg";
import LocationIcon from "../../public/location.svg";
import MessageIcon from "../../public/message.svg";
import PhoneIcon from "../../public/phone.svg";
import LineIcon from "../../public/Line.svg";

const Footer = ({ DHALogo }) => {
  const [logoTwo, setLogoTwo] = useState(DHALogo);
  return (
    <div className={Styles.Footer}>
      <div className={Styles.main}>
        <div className={Styles.footerTop}>
          <div>
            {logoTwo ? (
              <Image src={FootLogo1} alt="" />
            ) : (
              <Image src={FootLogo} alt="" />
            )}
            <p>
              Discover the perfect membership at <br /> Sukh Chan Wellness Club.
              Whether you
            </p>
            <div className={Styles.socailIcons}>
              {/* <Image className={Styles.icons} src={twitterLogo} alt="" /> */}
              <a href="https://www.linkedin.com/company/sukh-chan-wellness-club/">
                <Image className={Styles.icons} src={linkedinLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/sukhchanwellness?utm_source=qr">
                <Image className={Styles.icons} src={instagramLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/sukhchanwellness?utm_source=qr">
                <Image className={Styles.icons} src={facebookLogo} alt="" />
              </a>
            </div>
          </div>
          <ul>
            <h3>About Us</h3>
            <li>
              <a href="/Dha">Sukh Chan Branches</a>
            </li>
            <li>
              <a href="/">Management Team</a>
            </li>
            <li>
              <a href="/Services">What We Do</a>
            </li>
          </ul>
          <ul>
            <h3>Club</h3>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contacts">Contacts</a>
            </li>
            <li>
              <a href="/Trainers">Trainers</a>
            </li>
            <li>
              <a href="/">Membership</a>
            </li>
          </ul>
          <ul>
            <h3>Latest News</h3>
            <li>
              <Image className={Styles.latestImg} src={latestImg} alt="" />
              <p className={Styles.blinker}>
                Sukh Chan is open <br /> for franchising
              </p>
            </li>
          </ul>
        </div>
        <div className={Styles.footerBottom}>
          <ul>
            <li>
              <Image className={Styles.footerImg} src={LocationIcon} alt="" />
              <p>
                Sukh Chan Wellness Club Address: 25-H College Rd, Block H <br />
                Gulberg 2, Lahore, Punjab 54660
              </p>
            </li>
            <li>
              <Image className={Styles.footerImg} src={LocationIcon} alt="" />
              <p>
                Address: Plot 198, FF, Khyaban-e-Jinnah, Civic Commercial <br />{" "}
                Area Sector FF Dha Phase 4, Lahore, Punjab 54000
              </p>
            </li>
          </ul>
          <Image className={Styles.lineIcon} src={LineIcon} alt="" />
          <ul>
            <li>
              <Image className={Styles.footerImg} src={MessageIcon} alt="" />
              <p>connect@sukhchanclub.pk</p>
            </li>
          </ul>
          <Image className={Styles.lineIcon} src={LineIcon} alt="" />
          <ul>
            <li>
              <Image className={Styles.footerImg} src={PhoneIcon} alt="" />
              <p>(042)35751453</p>
            </li>
            <li>
              <Image className={Styles.footerImg} src={PhoneIcon} alt="" />
              <p>(042) 37309781</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
