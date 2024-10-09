"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Logo1 from "../../public/dhalogo.svg";

import Hamburger from "../../public/hamburger.svg";
import Link from "next/link";

const Navbar = ({ bg, DHALogo }) => {
  console.log(DHALogo, "DHALogo");
  const [navTheme, setNavTheme] = useState(bg);
  const [logoTwo, setLogoTwo] = useState(DHALogo);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const pathname = usePathname()
  return (
    <>
      <nav
        className={`${
          navTheme === "dark"   
            ? "mainNavbar"
            : navTheme === "green"
            ? "navbarGreen"
            : "navbarLight"
        } navbar`}
      >
        <div className="navigation">
          {logoTwo ? (
            <Image className="brandLogo" src={Logo1} alt="" />
          ) : (
            <Image className="brandLogo" src={Logo} alt="" />
          )}

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Image src={Hamburger} alt="" className="hamIcon" />
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link className={`nav-links ${pathname === "/" ? "active" : ""}`} href="/">
                  Main Branch
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Dha" ? "active" : ""}`} href="/Dha">
                  DHA Branch
                </Link>
              </li>
              <li
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <Link className={`nav-links ${pathname === "/About" ? "active" : ""}`} href="/About">
                  About Us
                </Link>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link className={`nav-d-links ${pathname === "/Message" ? "active" : ""}`} href="/Message">
                          CEO Message
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Services" ? "active" : ""}`} href="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Trainer" ? "active" : ""}`} href="/Trainer">
                  Trainers
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Pricing" ? "active" : ""}`} href="/Pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Event" ? "active" : ""}`} href="/Event">
                  Exclusive Events
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Gallery" ? "active" : ""}`} href="/Gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className={`nav-links ${pathname === "/Contact" ? "active" : ""}`} href="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;