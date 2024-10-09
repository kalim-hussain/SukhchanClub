import React from "react";
import styles from "./service.module.css";
import "@/app/globals.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer";
import Image from "next/image";
import serviceBg1 from "../../public/service-bg1.png";
import serviceBg2 from "../../public/service-bg2.png";
import serviceBg3 from "../../public/service-bg3.png";
import serviceBg4 from "../../public/service-bg4.png";
import serviceBg5 from "../../public/service-bg5.png";
import serviceBg6 from "../../public/service-bg6.png";
import serviceBg7 from "../../public/service-bg7.png";
import serviceImg1 from "../../public/service-img1.png";
import serviceImg2 from "../../public/service-img2.png";
import serviceImg3 from "../../public/service-img3.png";
import serviceImg4 from "../../public/service-img16.png";
import serviceImg5 from "../../public/service-img5.png";
import serviceImg6 from "../../public/service-img6.png";
import serviceImg7 from "../../public/service-img7.png";
import serviceImg8 from "../../public/service-img8.png";
import serviceImg9 from "../../public/service-img9.png";
import serviceImg10 from "../../public/service-img10.png";
import serviceImg11 from "../../public/service-img18.png";
import serviceImg12 from "../../public/service-img12.png";
import serviceImg13 from "../../public/service-img13.png";
import serviceImg14 from "../../public/service-img14.png";

const Services = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "120px" }}>
        <Navbar bg={"green"} DHALogo={false} />
      </div>
      <div className={`${styles.servicesMain} ${styles.container}`}>
        <h2>
          Services And <span>Facilities</span>
        </h2>
        <p>
          Sukh Cha{"'"}n Wellness Club offers a range of state-of-the-art
          facilities that cater to every aspect of health and wellness. The club
          has an executive gym and a ladies{"'"} gym, along with an aerobics
          hall, a squash court, and a banquet hall with a large terrace to host
          over 300 people at a time. Members can also enjoy a temperature
          controlled swimming pool, steam and sauna rooms. The club also
          features a spa, beauty parlour, and Ritz Movie Theatre, making it a
          one-stop destination for all wellness-related needs.
        </p>
      </div>
      <div className={styles.Servicecards}>
        <Image priority className={styles.imgBackground} src={serviceBg1} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg1} alt="" />

          <div className={styles.innerContent}>
            <h3>EXECUTIVE GYM</h3>
            <p>
              Our executive gym is designed for those who demand the best in
              equipment and services. With state-of-the-art machines and
              personalized fitness plans from our highly trained fitness
              professionals, our members can achieve their fitness goals and
              stay motivated.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Servicecards} ${styles.color} ${styles.backgroundColor}`}
      >
        {/* <Image priority className={styles.imgBackground} src={serviceBg1} alt=""/> */}
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg2} alt="" />

          <div className={styles.innerContent}>
            <h3>Ladies Gym</h3>
            <p>
              Our executive gym is designed for those who demand the best in
              equipment and services. With state-of-the-art machines and
              personalized fitness plans from our highly trained fitness
              professionals, our members can achieve their fitness goals and
              stay motivated.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Servicecards} ${styles.backgroundColor}`}>
        <Image priority className={styles.imgBackground} src={serviceBg2} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg3} alt="" />

          <div className={styles.innerContent}>
            <h3>AEROBICS HALL</h3>
            <p>
              Our aerobics hall provides a high-energy atmosphere for members to
              get their hearts pumping and improve their cardiovascular health.
              Our experienced instructors lead a variety of classes, including
              dance, yoga, Tabata, and Zumba, to keep members motivated and keep
              obesity at bay.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Servicecards}>
        <Image priority className={styles.imgBackground} src={serviceBg3} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg4} alt="" />

          <div className={styles.innerContent}>
            <h3>THE POOL SIDE CAFE</h3>
            <p>
              Our cafe offers a variety of healthy and delicious snacks and
              drinks for members to refuel after their workout or simply relax
              and socialize with other members. Our menu is designed to promote
              healthy eating habits and support members{"'"} wellness goals.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Servicecards} ${styles.color} ${styles.backgroundColor}`}
      >
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg5} alt="" />

          <div className={styles.innerContent}>
            <h3>SQUASH COURT</h3>
            <p>
              Our squash court is perfect for those who want to improve their
              coordination, agility, and endurance. With professional-grade
              equipment and expert coaching, our members can hone their skills
              and compete at the highest level.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Servicecards} ${styles.backgroundColor}`}>
        {/* <Image priority className={styles.imgBackground} src={serviceBg2} alt="" /> */}
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg6} alt="" />

          <div className={styles.innerContent}>
            <h3>SWIMMING POOL</h3>
            <p>
              Our swimming pool offers a refreshing and invigorating way for
              members to exercise and improve their overall health. With expert
              coaching and a range of programs, including aqua aerobics and
              swimming lessons, our members can enjoy the benefits of swimming
              at any level.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Servicecards}>
        <Image priority className={styles.imgBackground} src={serviceBg4} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg7} alt="" />

          <div className={styles.innerContent}>
            <h3>STEAM AND SAUNA ROOMS</h3>
            <p>
              Our steam and sauna rooms provide a relaxing and rejuvenating
              experience for members to unwind and reduce stress. With separate
              facilities for men and women, our members can enjoy the benefits
              of these services in a comfortable and private environment.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Servicecards} ${styles.color} ${styles.backgroundColor}`}
      >
        {/* <Image priority className={styles.imgBackground} src={serviceBg1} alt=""/> */}
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg8} alt="" />

          <div className={styles.innerContent}>
            <h3>LOCKERS</h3>
            <p>
              Our lockers provide a secure and convenient space for members to
              store their belongings while they work out or enjoy the club{"'"}s
              facilities. With 24/7 access and a variety of sizes, our members
              can choose the locker that best suits their needs.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Servicecards} ${styles.backgroundColor}`}>
        <Image priority className={styles.imgBackground} src={serviceBg2} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg9} alt="" />

          <div className={styles.innerContent}>
            <h3>BEAUTY PARLOUR</h3>
            <p>
              Our beauty parlour provides a range of services, including
              haircuts, manicures, and pedicures, to help members look and feel
              their best. With skilled stylists and modern equipment, our
              members can enjoy a personalized beauty experience that meets
              their unique needs.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Servicecards}>
        <Image priority className={styles.imgBackground} src={serviceBg5} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg10} alt="" />

          <div className={styles.innerContent}>
            <h3>SPA</h3>
            <p>
              Our spa offers a range of services, including massages, facials,
              and body treatments, to promote relaxation and wellness. With
              expert therapists and luxurious amenities, our members can indulge
              in a spa experience that leaves them feeling refreshed and
              rejuvenated.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Servicecards} ${styles.backgroundColor}`}>
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg11} alt="" />

          <div className={styles.innerContent}>
            <h3>RITZ MOVIE THEATRE</h3>
            <p>
              Our Ritz movie theatre offers a fun and entertaining way for
              members to unwind and enjoy a movie in a comfortable and private
              setting. With a range of movies and snacks, our members can relax
              and enjoy a night out without leaving the club.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Servicecards} ${styles.color} ${styles.backgroundColor}`}
      >
        <Image priority className={styles.imgBackground} src={serviceBg6} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg12} alt="" />

          <div className={styles.innerContent}>
            <h3>TANGO SNOOKER</h3>
            <p>
              Challenge your friends to a game of snooker or pool at our Tango
              Snooker Club, featuring high-quality tables and equipment.
              Challenge your friends to a game of snooker or pool at our Tango
              Snooker Club, featuring high-quality tables and equipment.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Servicecards}`}
      >
        <Image priority className={styles.imgBackground} src={serviceBg7} alt="" />
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg13} alt="" />

          <div className={styles.innerContent}>
            <h3>BANQUET HALL</h3>
            <p>
              Our banquet hall is a versatile and elegant space for members to
              host events, including weddings, corporate events, and social
              gatherings. With customizable menus and expert staff, our members
              can host an event that meets their unique needs and exceeds their
              expectations. Our Banquet hall boasts a spacious capacity to
              accommodate more than 300 guests simultaneously, complemented by a
              generous open terrace.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Servicecards} ${styles.color} ${styles.backgroundColor}`}>
        {/* <Image priority className={styles.imgBackground} src={serviceBg2} alt="" /> */}
        <div className={`${styles.content} ${styles.container}`}>
          <Image priority className={styles.innerImg} src={serviceImg14} alt="" />

          <div className={styles.innerContent}>
            <h3>NINA{"'"}S AESTHETIC CLINIC</h3>
            <p>
            Sukh Chan Wellness Club{"'"}s Aesthetic Clinic, where beauty meets wellness. Our clinic offers a wide variety of advanced skin treatments and services designed to enhance your natural beauty and promote holistic wellness. With cutting-edge technology and a team of experienced professionals, we are dedicated to helping you achieve your aesthetic goals while also improving your overall health and well-being. Whether you{"'"}re seeking a rejuvenating facial, laser hair removal, or other advanced skin treatments, our clinic has everything you need to look and feel your best. Experience the power of holistic beauty at Sukh Chan Wellness Club{"'"}s Aesthetic Clinic.
            </p>
          </div>
        </div>
      </div>
      <Footer DHALogo={false}/>
    </div>
  );
};

export default Services;
