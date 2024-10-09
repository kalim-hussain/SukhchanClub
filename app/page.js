"use client";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import styles from "../app/styles/page.module.css";
import Image from "next/image";
import BgVedio from "../public/SukhChanVideo.mp4";
import AboutImg from "../public/aboutImg.png";
import AboutImg1 from "../public/greenBar.png";
import serviceImg from "../public/serviceImg.png";
import Prev from "../public/prev.svg";
import Next from "../public/next.svg";
import teamImg1 from "../public/teamImg1.png";
import teamImg2 from "../public/teamImg2.png";
import teamImg3 from "../public/teamImg3.png";
import teamImg5 from "../public/teamImg5.png";
import teamImg6 from "../public/teamImg6.png";
import teamImg7 from "../public/teamImg7.png";
// import teamImg4 from "../public/teamImg4.png";
import Navbar from "./components/navbar.jsx";
import testBg from "../public/test-bg.png";
import testSlideImg1 from "../public/testslideimg3.png";
import testSlideImg2 from "../public/testslideimg2.png";
import testSlideImg4 from "../public/testslideimg4.png";
import testslideimg5 from "../public/testslideimg5.png";
import testslideimg6 from "../public/testslideimg6.png";
import Footer from "./components/Footer";
import serviceImg2 from "../public/service-img15.png";
import serviceImg3 from "../public/service-img3.png";
import serviceImg4 from "../public/service-img16.png";
import serviceImg5 from "../public/service-img17.png";
import serviceImg6 from "../public/service-img6.png";
import serviceImg7 from "../public/service-img7.png";
import serviceImg8 from "../public/service-img8.png";
import serviceImg9 from "../public/service-img9.png";
import serviceImg10 from "../public/service-img10.png";
import serviceImg11 from "../public/service-img18.png";
import serviceImg12 from "../public/service-img12.png";
import serviceImg13 from "../public/service-img19.png";
import serviceImg14 from "../public/service-img14.png";
import YIcon from "../public/youtube.svg";

export default function Home() {
  const TeamData = [
    {
      img: teamImg5,
      name: "Ms. Nina Akbar",
      des: "CEO",
    },
    {
      img: teamImg2,
      name: "Mr. Fahmeed Kamil",
      des: "Managing Director",
    },
    {
      img: teamImg3,
      name: "Mr. Sajid Khan",
      des: "Chief Financial Officer",
    },
    {
      img: teamImg1,
      name: "Mr. Riaz Nadir",
      des: "Operations  Manager",
    },
    {
      img: teamImg6,
      name: "Nazeem Baig",
      des: "Architect",
    },
    {
      img: teamImg7,
      name: "Tawakal Ali",
      des: "Restaurant Manager",
    },
    {
      img: teamImg5,
      name: "Ms. Nina Akbar",
      des: "CEO",
    },
    {
      img: teamImg2,
      name: "Mr. Fahmeed Kamil",
      des: "Managing Director",
    },
    {
      img: teamImg3,
      name: "Mr. Sajid Khan",
      des: "Chief Financial Officer",
    },
    {
      img: teamImg1,
      name: "Mr. Riaz Nadir",
      des: "Operations  Manager",
    },
    {
      img: teamImg6,
      name: "Nazeem Baig",
      des: "Architect",
    },
    
  
  ];
  // State variables for form fields
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
  };

  return (
    <main className={styles.main}>
      <div className={styles.videoSection}>
        <video autoPlay muted loop>
          <source src={BgVedio} type="video/mp4" />
        </video>
        <div className={styles.videoContent}>
          <Navbar bg={"dark"} DHALogo={false} />
          <h1>
            PAKISTAN{"’"}S PIONEER <span>WELLNESS CLUB</span>
          </h1>
        </div>
      </div>
      <div
        style={{
          height: "8px",
          background: "#61AE4B",
        }}
      ></div>
      <div className={`${styles.aboutSection} ${styles.container}`}>
        <div className={styles.content}>
          <span>Know About Us</span>
          <h1>Who We Are?</h1>
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
          <button>Read More</button>
        </div>
        <div className={styles.image}>
          <Image priority className={styles.AboutImg} src={AboutImg} alt="" />
          <Image priority className={styles.PImg} src={AboutImg1} alt="" />
        </div>
      </div>
      <div className={`${styles.service} ${styles.container}`}>
        <h2>
          Services And <span>Facilities</span>
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles["mySwiper"]}
          navigation={{
            prevEl: `.${styles["swiper-button-prev"]}`, // Apply the CSS module class name
            nextEl: `.${styles["swiper-button-next"]}`, // Apply the CSS module class name
          }}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>Executive GYM</h2>
              <p>
                Our executive gym is designed for those who demand the best in
                equipment and services. With state-of-the-art machines and
                personalized fitness plans from our highly trained fitness
                professionals, our members can achieve their fitness goals and
                stay motivated.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg2}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>Ladies Gym</h2>
              <p>
                Our executive gym is designed for those who demand the best in
                equipment and services. With state-of-the-art machines and
                personalized fitness plans from our highly trained fitness
                professionals, our members can achieve their fitness goals and
                stay motivated.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg3}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>AEROBICS HALL</h2>
              <p>
                Our aerobics hall provides a high-energy atmosphere for members
                to get their hearts pumping and improve their cardiovascular
                health. Our experienced instructors lead a variety of classes,
                including dance, yoga, Tabata, and Zumba, to keep members
                motivated and keep obesity at bay.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg4}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>THE POOL SIDE CAFÉ</h2>
              <p>
                Our café offers a variety of healthy and delicious snacks and
                drinks for members to refuel after their workout or simply relax
                and socialize with other members. Our menu is designed to
                promote healthy eating habits and support members{"'"} wellness
                goals.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg5}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>SQUASH COURT</h2>
              <p>
                Our squash court is perfect for those who want to improve their
                coordination, agility, and endurance. With professional-grade
                equipment and expert coaching, our members can hone their skills
                and compete at the highest level.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg6}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>SWIMMING POOL</h2>
              <p>
                Our swimming pool offers a refreshing and invigorating way for
                members to exercise and improve their overall health. With
                expert coaching and a range of programs, including aqua aerobics
                and swimming lessons, our members can enjoy the benefits of
                swimming at any level.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg7}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>STEAM AND SAUNA ROOMS</h2>
              <p>
                Our steam and sauna rooms provide a relaxing and rejuvenating
                experience for members to unwind and reduce stress. With
                separate facilities for men and women, our members can enjoy the
                benefits of these services in a comfortable and private
                environment.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg8}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>LOCKERS</h2>
              <p>
                Our lockers provide a secure and convenient space for members to
                store their belongings while they work out or enjoy the club
                {"'"}s facilities. With 24/7 access and a variety of sizes, our
                members can choose the locker that best suits their needs.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg9}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>BEAUTY PARLOUR</h2>
              <p>
                Our beauty parlour provides a range of services, including
                haircuts, manicures, and pedicures, to help members look and
                feel their best. With skilled stylists and modern equipment, our
                members can enjoy a personalized beauty experience that meets
                their unique needs.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg10}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>SPA</h2>
              <p>
                Our spa offers a range of services, including massages, facials,
                and body treatments, to promote relaxation and wellness. With
                expert therapists and luxurious amenities, our members can
                indulge in a spa experience that leaves them feeling refreshed
                and rejuvenated.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg11}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>RITZ MOVIE THEATRE</h2>
              <p>
                Our Ritz movie theatre offers a fun and entertaining way for
                members to unwind and enjoy a movie in a comfortable and private
                setting. With a range of movies and snacks, our members can
                relax and enjoy a night out without leaving the club.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg12}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>TANGO SNOOKER</h2>
              <p>
                Challenge your friends to a game of snooker or pool at our Tango
                Snooker Club, featuring high-quality tables and equipment.
                Challenge your friends to a game of snooker or pool at our Tango
                Snooker Club, featuring high-quality tables and equipment.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg13}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>BANQUET HALL</h2>
              <p>
                Our banquet hall is a versatile and elegant space for members to
                host events, including weddings, corporate events, and social
                gatherings. With customizable menus and expert staff, our
                members can host an event that meets their unique needs and
                exceeds their expectations. Our Banquet hall boasts a spacious
                capacity to accommodate more than 300 guests simultaneously,
                complemented by a generous open terrace.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.image}>
              <Image
                priority
                className={styles.serviceImg}
                src={serviceImg14}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h2>NINA{"'"}S AESTHETIC CLINIC</h2>
              <p>
                Sukh Chan Wellness Club{"'"}s Aesthetic Clinic, where beauty
                meets wellness. Our clinic offers a wide variety of advanced
                skin treatments and services designed to enhance your natural
                beauty and promote holistic wellness. With cutting-edge
                technology and a team of experienced professionals, we are
                dedicated to helping you achieve your aesthetic goals while also
                improving your overall health and well-being. Whether you{"'"}re
                seeking a rejuvenating facial, laser hair removal, or other
                advanced skin treatments, our clinic has everything you need to
                look and feel your best. Experience the power of holistic beauty
                at Sukh Chan Wellness Club{"'"}s Aesthetic Clinic.
              </p>
              <button>Read More</button>
            </div>
          </SwiperSlide>

          <div className={styles["swiper-button-prev"]}>
            <Image priority src={Prev} alt="Prev" />
          </div>
          <div className={styles["swiper-button-next"]}>
            <Image priority src={Next} alt="Next" />
          </div>
        </Swiper>
      </div>
      <div className={styles.team}>
        <div className={`${styles.container} ${styles.teamMain}`}>
          <div className={styles.innerContent}>
            <h2>
              Our <span>Team</span>
            </h2>
            <div className={styles.teamCards}>
              <Swiper
                loop={true}
                loopFillGroupWithBlank={true}
                loopedSlides={TeamData.length}
                slidesPerView={4}
                spaceBetween={0}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  769: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1444: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar]}
                className={styles["mySwiper"]}
              >
                {/*total number of slides must be >= slidesPerView * 2 */}

                {TeamData.map((e) => (
                  <>
                    <SwiperSlide key={TeamData.length}>
                      <div className={styles.teamCard}>
                        <Image
                          priority
                          className={styles.teamImg}
                          src={e.img}
                          alt=""
                        />
                        <div>
                          <p>{e.name}</p>
                          <p>{e.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
  
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonails}>
        <Image priority className={styles.testBg} src={testBg} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <h2>Testimonials</h2>
          <Swiper
            modules={[Navigation]}
            className={styles["mySwiper"]}
            navigation={{
              prevEl: `.${styles["swiper-button-prev1"]}`, // Apply the CSS module class name
              nextEl: `.${styles["swiper-button-next1"]}`, // Apply the CSS module class name
            }}
          >
            <SwiperSlide>
              <div className={styles.SwiperSlide}>
                <div className={styles.image}>
                  <Image
                    priority
                    className={styles.testimage}
                    src={testSlideImg2}
                    alt=""
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3>What They Say About Us?</h3>
                  <span>Sana Fakhar (Actress)</span>
                  <p>
                    Every time I visit Sukhchan Club, I can{"'"}t help but
                    admire Nina{"'"}s Clinic, and I{"'"}m always delighted with
                    the exceptional service provided by Nina. Her expertise and
                    dedication shine through as she continually brings new and
                    innovative approaches to her practice. I truly appreciate
                    the care and attention she devotes to our health and
                    well-being.
                  </p>
                  <a href="https://www.youtube.com/@sukhchanwellnessclub538">
                    <Image src={YIcon} alt="" />
                    <span>
                      https://www.youtube.com/@sukhchanwellnessclub538
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.SwiperSlide}>
                <div className={styles.image}>
                  <Image
                    priority
                    className={styles.testimage}
                    src={testSlideImg1}
                    alt=""
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3>What They Say About Us?</h3>
                  <span>Deedar (Actress)</span>
                  <p>
                    Sukhchan Club is an absolute gem, boasting a stunning and
                    inviting environment that welcomes everyone with open arms.
                    Its beauty is not limited to the physical aesthetics alone
                    but also extends to the warmth and friendliness of its
                    staff, making it an ideal destination for individuals from
                    all walks of life.
                  </p>
                  <a href="https://www.youtube.com/@sukhchanwellnessclub538">
                    <Image src={YIcon} alt="" />
                    <span>
                      https://www.youtube.com/@sukhchanwellnessclub538
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.SwiperSlide}>
                <div className={styles.image}>
                  <Image
                    priority
                    className={styles.testimage}
                    src={testSlideImg4}
                    alt=""
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3>What They Say About Us?</h3>
                  <span>Diana Baig (Cricketer)</span>
                  <p>
                    Absolutely! Sukhchan Club is undeniably the best club in
                    town, offering an unbeatable combination of top-notch
                    trainers and a fantastic environment. If you{"'"}re looking
                    for a place to enjoy and make the most of your fitness
                    journey, there{"'"}s no better choice than Sukhchan Club.
                  </p>
                  <a href="https://www.youtube.com/@sukhchanwellnessclub538">
                    <Image src={YIcon} alt="" />
                    <span>
                      https://www.youtube.com/@sukhchanwellnessclub538
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.SwiperSlide}>
                <div className={styles.image}>
                  <Image
                    priority
                    className={styles.testimage}
                    src={testslideimg5}
                    alt=""
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3>What They Say About Us?</h3>
                  <span>Bismah Maroof (Cricketer)</span>
                  <p>
                    Sukhchan Club stands out as the premier destination in our
                    town, offering an exceptional experience with the finest
                    trainers and a delightful atmosphere. If you{"'"}re seeking
                    a place to revel in and embrace your fitness journey, look
                    no further than Sukhchan Club.
                  </p>
                  <a href="https://www.youtube.com/@sukhchanwellnessclub538">
                    <Image src={YIcon} alt="" />
                    <span>
                      https://www.youtube.com/@sukhchanwellnessclub538
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.SwiperSlide}>
                <div className={styles.image}>
                  <Image
                    priority
                    className={styles.testimage}
                    src={testslideimg6}
                    alt=""
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3>What They Say About Us?</h3>
                  <span>Muhammad Hafeez (Cricketer)</span>
                  <p>
                    I have been a dedicated member of Sukhchan Club for the past
                    four years, and I cannot express how much I enjoy my gym
                    sessions here. The club has truly become a second home to
                    me, thanks to the exceptional staff and their warm
                    hospitality. Throughout my time at Sukhchan Club, I have
                    experienced nothing but top-notch service.
                  </p>
                  <a href="https://www.youtube.com/@sukhchanwellnessclub538">
                    <Image src={YIcon} alt="" />
                    <span>
                      https://www.youtube.com/@sukhchanwellnessclub538
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles["swiper-button-prev1"]}>
              <Image
                priority
                className={styles.navigatorBtn}
                src={Prev}
                alt="Prev"
              />
            </div>
            <div className={styles["swiper-button-next1"]}>
              <Image
                priority
                className={styles.navigatorBtn}
                src={Next}
                alt="Next"
              />
            </div>
          </Swiper>
        </div>
      </div>

      <div className={`${styles.memberShip} ${styles.container}`}>
        <div className={styles.membershipContent}>
          <h1>Membership</h1>
          <p>
            Discover the perfect membership at Sukh Chan Wellness Club. Whether
            you are an individual, a family, or a corporate group, we have
            tailored options for you. Choose from individual, family, and
            corporate memberships, along with customized plans and personal
            trainers for quick and personalized fitness results. Enjoy a free
            club tour and a one-day trial to start your wellness journey with
            confidence. Join us today and find your ideal membership at Sukh
            Chan Wellness Club.
          </p>

          <form onSubmit={handleSubmit}>
            <h3>Register For Membership</h3>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
