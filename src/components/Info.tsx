import React from "react";
import styles from "./Info.module.scss";

const Bubble: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}> = ({ children, style, id, className }) => (
  <div style={style} className={[styles.bubble, className].join(" ")} id={id}>
    {children}
  </div>
);

export const Info = () => (
  <section className={styles.section}>
    <div className={styles.row}>
      <div className={styles.column}>
        <img
          src="/images/graph.svg"
          alt="Graph"
          style={{ margin: "0 auto", width: "90%" }}
        />
        <Bubble>
          The most popular style of t-shirt in both 2021 and 2022 was the humble
          tank, followed by oversized tees. Given many of us spent the majority
          of the last couple of years chilling on the couch, it’s no surprise
          that comfort was key when it came to fashion choices. What is
          interesting, however, is that the only style to decrease in popularity
          from 2021 to 2022 was tie-dye t-shirts, which we suppose is terrible
          news for any hardcore hippies out there.
        </Bubble>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.column}>
            <Bubble style={{ height: "100%" }}>
              <div className={styles.content}>
                <h3 className={styles.title}>Tanks</h3>
                <p>
                  <img
                    className={styles.image}
                    src="/images/tanks.svg"
                    alt="Tank"
                  />
                  As it turns out, 18-24-year-olds buy the most tanks, seemingly
                  because they’re keen to show off their trip to #gainsville
                  with a cheeky mirror selfie.
                </p>
              </div>
            </Bubble>
          </div>
          <div className={styles.column}>
            <Bubble style={{ height: "100%" }}>
              <div className={styles.content}>
                <h3 className={styles.title}>Music T-shirts</h3>
                <p>
                  <img
                    className={styles.image}
                    src="/images/band.webp"
                    alt="Music T-Shirt"
                  />
                  Meanwhile, music t-shirts are most popular among
                  25-34-year-olds.
                </p>
              </div>
            </Bubble>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <Bubble className={styles.slogan}>
              <div className={styles.content}>
                <h3 className={styles.title}>Slogan T-shirts</h3>
                <p>
                  <img
                    className={styles.image}
                    src="/images/slogan.png"
                    alt="Band T-Shirt"
                  />
                  While 35-44-year-olds buy the most slogan t-shirts.
                </p>
              </div>
            </Bubble>
          </div>
          <div className={styles.column}>
            <Bubble style={{ height: "100%" }}>
              <div className={styles.content}>
                <h3 className={styles.title}>Rude T-shirts</h3>
                <p>
                  <img
                    className={styles.image}
                    src="/images/rude-tshirt.svg"
                    alt="Band T-Shirt"
                  />
                  Ages 45+ often shied away from purchasing the not so polite
                  items.
                </p>
              </div>
            </Bubble>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column} style={{ textAlign: "center" }}>
        <img src="/images/map.svg" alt="World map" />
      </div>
      <div className={styles.column}>
        <Bubble style={{ margin: "unset" }}>
          It turns out that people in Europe and Oceania (yep, that includes us
          Aussies) are practically neck and neck in their adoration for the good
          ol’ graphic tee. As it stands, Europeans make up 44% of graphic tee
          sales in 2022, while Oceania trails just behind at 43%. So there’s no
          doubt we’ll be waiting with bated breath to see which region is
          ultimately crowned the graphic t-shirt capital of the world.
          Meanwhile, folks in the UK and the Americas, as well as Germany, Asia,
          France and Spain, have some catching up to do, as their accumulated
          total only adds up to 41%!
        </Bubble>
      </div>
    </div>
    <div className={[styles.row, styles.modalRow].join(" ")}>
      <div className={styles.column}>
        <div className={styles.modalWrapper}>
          <img
            src="/images/model-male.png"
            alt="Male T-shirt"
            className={styles.model}
            style={{ width: "70%" }}
          />
          <Bubble
            style={{
              position: "absolute",
              top: 50,
              right: -100,
            }}
          >
            As many self-help books have boldly claimed, ‘men are from Mars,
            women are from Venus.’ However, it seems there is one thing they can
            both agree on: their love for a top-notch t-shirt. Yep, tees have
            remained just as popular for men and women over the years, with the
            percentage of males and females buying t-shirts splitting roughly
            50:50.
          </Bubble>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.modalWrapper}>
          <img
            src="/images/model-female.png"
            alt="Male T-shirt"
            className={styles.model}
            style={{ width: "50%", position: "absolute", right: 0, bottom: 0 }}
          />
          <Bubble
            style={{
              position: "absolute",
              bottom: 0,
              left: 65,
            }}
          >
            However, there are still some ways that we differ, with men taking
            more of an interest in parody tees and women tending to lean towards
            an anime t-shirt. We’re gonna go ahead and attribute this trend to
            the growing popularity of shows like Jujutsu Kaisen and One Piece.
          </Bubble>
        </div>
      </div>
    </div>
    <div className={[styles.row, styles.smOnly].join(" ")}>
      <div className={styles.column}>
        <Bubble>
          As many self-help books have boldly claimed, ‘men are from Mars, women
          are from Venus.’ However, it seems there is one thing they can both
          agree on: their love for a top-notch t-shirt. Yep, tees have remained
          just as popular for men and women over the years, with the percentage
          of males and females buying t-shirts splitting roughly 50:50.
        </Bubble>
      </div>
      <div className={styles.column}>
        <Bubble>
          However, there are still some ways that we differ, with men taking
          more of an interest in parody tees and women tending to lean towards
          an anime t-shirt. We’re gonna go ahead and attribute this trend to the
          growing popularity of shows like Jujutsu Kaisen and One Piece.
        </Bubble>
      </div>
    </div>
  </section>
);

export default Info;
