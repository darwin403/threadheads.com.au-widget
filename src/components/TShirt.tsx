import { FC } from "react";
import styles from "./TShirt.module.scss";

interface IProps {
  theme: "light" | "dark";
  year: string;
  trend: string;
  type: string;
  description: string;
  tShirtImgSrc: string;
}

export const TShirt: FC<IProps> = ({
  theme,
  year,
  trend,
  type,
  description,
  tShirtImgSrc,
}) => (
  <section
    className={styles.section}
    style={
      theme === "dark"
        ? { color: "white", backgroundColor: "black", flexDirection: "row" }
        : {
            color: "black",
            backgroundColor: "white",
            flexDirection: "row-reverse",
          }
    }
  >
    <div
      className={styles.background}
      style={
        theme === "dark"
          ? {
              backgroundImage: 'url("/images/background-black.png")',
              opacity: 0.08,
            }
          : {
              backgroundImage: 'url("/images/background-white.png")',
              opacity: 0.04,
            }
      }
    />
    <div className={styles.column}>
      <div className={styles.year}>
        <img src="/images/star.svg" alt="Star" className={styles.star} />I
        <span className={styles.heart}>&#10084;&#65039;</span> {trend}’s
        <img src="/images/star.svg" alt="Star" className={styles.star} />
      </div>
      <h1 className={styles.header}>{type}</h1>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.column}>
      <img src={tShirtImgSrc} alt={type} />
    </div>
  </section>
);
