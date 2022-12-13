import { CSSProperties, FC } from "react";
import styles from "./TShirt.module.scss";

import { Link, Element } from "react-scroll";

type IStickers = {
  position: "content" | "image" | "background";
  imageSrc: string;
  style: CSSProperties;
}[];

interface IStickersProps {
  stickers?: IStickers;
}

const Stickers: FC<IStickersProps> = ({ stickers }) => (
  <div className={styles.stickers}>
    {stickers?.map((s, sIndex) => (
      <img src={s.imageSrc} style={s.style} alt="Sticker" key={sIndex} />
    ))}
  </div>
);

interface IProps {
  theme: "light" | "dark";
  year: number;
  trend: string;
  type: string;
  description: string;
  tShirtImgSrc: string;
  stickers?: IStickers;
}

export const TShirt: FC<IProps> = ({
  theme,
  year,
  trend,
  type,
  description,
  tShirtImgSrc,
  stickers,
}) => (
  <section
    className={styles.section}
    style={
      theme === "dark"
        ? { color: "white", backgroundColor: "black" }
        : {
            color: "black",
            backgroundColor: "white",
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

    <Stickers stickers={stickers?.filter((s) => s.position === "background")} />

    <div className={styles.timeline}>
      {year > 2012 && (
        <Link
          to={(year - 1).toString()}
          className={styles.arrow}
          smooth={true}
          duration={500}
        >
          &uarr;
        </Link>
      )}
      <Link
        to={year.toString()}
        className={styles.year}
        smooth={true}
        duration={500}
      >
        {year}
      </Link>
      <Link
        to={(year + 1).toString()}
        className={styles.arrow}
        smooth={true}
        duration={500}
      >
        &darr;
      </Link>
    </div>
    <Element name={year.toString()} className={styles.wrapper}>
      <div className={styles.column}>
        <Stickers
          stickers={stickers?.filter((s) => s.position === "content")}
        />
        <div className={styles.year}>
          <img src="/images/star.svg" alt="Star" className={styles.star} />I
          <span className={styles.heart}>&#10084;&#65039;</span> '{trend}s
          <img src="/images/star.svg" alt="Star" className={styles.star} />
        </div>
        <h1 className={styles.header}>{type}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.column}>
        <Stickers stickers={stickers?.filter((s) => s.position === "image")} />
        <img src={tShirtImgSrc} alt={type} className={styles.tShirt} />
      </div>
    </Element>
  </section>
);
