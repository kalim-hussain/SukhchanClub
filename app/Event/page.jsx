import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import galleryBg from "../../public/event-background.png";
import styles from "./event.module.css";
import Img1 from "../../public/event-img1.png";
import Img2 from "../../public/event-img2.png";
import Img3 from "../../public/event-img3.png";
import Img4 from "../../public/event-img4.png";
import "app/globals.css";

const Event = () => {
  return (
    <div>
      <div>
        <Navbar bg={"green"} DHALogo={false} />
      </div>

      <div className={styles.background}>
        <Image priority
          src={galleryBg}
          className={styles.bgImg}
          alt="Gallery Background"
        />
        <div className={`${styles.content} ${styles.container}`}>
          <h2>
            Exclusive <span>events</span>
          </h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.topPara}`}>
        <p>
          In addition to our comprehensive range of wellness facilities, Sukh
          Cha{"'"}n Wellness Club also organizes exclusive events for members
          and nonmembers alike. These events are designed to enhance the overall
          experience and provide opportunities for socializing, entertainment,
          and celebration.
        </p>
        <p>Some of the events we arrange include:</p>
      </div>
      <div className={styles.row}>
        <div className={`${styles.container} ${styles.Eventcontent}`}>
          <div className={styles.innerContent}>
            <h3>Electronic Music Parties</h3>
            <p>
              Immerse yourself in the vibrant beats and energetic atmosphere of
              our electronic music parties. Dance the night away to the latest
              tunes spun by renowned DJs, creating unforgettable memories with
              fellow club members.
            </p>
            <h3>Birthday Parties</h3>
            <p>
              Celebrate your special day in style at Sukh Cha{"'"}n Wellness
              Club. We offer exclusive packages for birthday parties, including
              personalized decorations, delicious catering, and a dedicated
              event team to ensure a memorable experience for you and your
              guests.
            </p>
          </div>
          <div className={styles.innerImg}>
            <Image priority className={styles.img} src={Img1} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.container} ${styles.Eventcontent}`}>
          <div className={styles.innerImg}>
            <Image priority className={styles.img} src={Img2} alt="" />
          </div>
          <div className={styles.innerContent}>
            <h3>Movie Nights</h3>
            <p>
              Relax and enjoy a cozy movie night at our Ritz Movie Theatre. We
              curate a selection of popular films and create a cinematic
              ambiance where you can unwind and immerse yourself in the world of
              movies.
            </p>
            <h3>Themed Events</h3>
            <p>
              From costume parties to holiday celebrations, we organize a
              variety of themed events throughout the year. These events add a
              touch of excitement and provide a platform for our members to
              connect, have fun, and embrace the festive spirit.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.container} ${styles.Eventcontent}`}>
          <div className={styles.innerContent}>
            <h3>Workshops and Seminars</h3>
            <p>
              Expand your knowledge and enhance your well-being through
              workshops and seminars conducted by experts in various fields.
              Topics may include nutrition, fitness, stress management, and
              mindfulness, among others.
            </p>
            <h3>Engagement Parties</h3>
            <p>
              Celebrate the joyous milestone of your engagement with a stunning
              and personalized engagement party at Sukh Cha{"'"}n Wellness Club.
              Our event team will assist you in planning and organizing every
              aspect, from elegant decorations to delectable catering, ensuring
              a magical evening for you, your partner, and your loved ones.
            </p>
          </div>
          <div className={styles.innerImg}>
            <Image priority className={styles.img} src={Img3} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.container} ${styles.Eventcontent}`}>
          <div className={styles.innerImg}>
            <Image priority className={styles.img} src={Img4} alt="" />
          </div>
          <div className={styles.innerContent}>
            <h3>Anniversaries</h3>
            <p>
              Whether it{"'"}s your first anniversary or a milestone
              celebration, we can help you commemorate your special day in a
              remarkable way. Our dedicated team will work closely with you to
              create a romantic and intimate ambiance, complete with exquisite
              decor, gourmet cuisine, and personalized touches, allowing you to
              cherish and renew your love in a beautiful setting.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.container} ${styles.botpara}`}>
          <p>
            These exclusive events are tailored to cater to the diverse
            interests of our esteemed customers, fostering a sense of community
            and providing opportunities for enjoyment and personal growth.
          </p>
        </div>
      </div>
      <Footer DHALogo={false} />
    </div>
  );
};

export default Event;
