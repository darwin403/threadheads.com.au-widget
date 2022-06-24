import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <React.Fragment>
      {/* Neon T-Shirts*/}
      <section
        className={styles.section}
        style={{ color: "white", backgroundColor: "black" }}
      >
        <div className={styles.whitePattern} />
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 80’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Neon T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
        <div className={styles.column}>
          <img src="/images/neon.svg" alt="Neon T-shirt" />
        </div>
      </section>
      {/* Tanks  */}
      <section className={styles.section} style={{ color: "black" }}>
        <div className={styles.whiteBackground} />
        <div className={styles.column}>
          <img src="/images/tanks.svg" alt="Tanks" />
        </div>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 90’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Tank T-Shirt</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
      </section>
      {/* Tie Dye T-Shirts */}
      <section className={styles.section} style={{ color: "white" }}>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 60’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Tie Dye T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
        <div className={styles.column}>
          <img src="/images/tie-dye.webp" alt="Tie Dye T-shirt" />
        </div>
      </section>
      {/* Anime T-Shirts */}
      <section className={styles.section} style={{ color: "black" }}>
        <div className={styles.column}>
          <img src="/images/anime.webp" alt="Anime T-Shirts" />
        </div>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 50’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Anime T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
      </section>
      {/* Graphic T-Shirts */}
      <section className={styles.section} style={{ color: "white" }}>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 50’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Graphic T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
        <div className={styles.column}>
          <img src="/images/graphic.webp" alt="Graphic T-shirt" />
        </div>
      </section>
      {/* Crop T-Shirts */}
      <section className={styles.section} style={{ color: "black" }}>
        <div className={styles.column}>
          <img src="/images/crop.webp" alt="Crop T-Shirt" />
        </div>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 80’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Crop T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
      </section>
      {/* Slogan T-Shirts */}
      <section className={styles.section} style={{ color: "white" }}>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 00’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Slogan T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
        <div className={styles.column}>
          <img src="/images/slogan.png" alt="Slogan T-shirt" />
        </div>
      </section>
      {/* Band T-Shirts */}
      <section className={styles.section} style={{ color: "black" }}>
        <div className={styles.column}>
          <img src="/images/band.webp" alt="Band T-Shirt" />
        </div>
        <div className={styles.column}>
          <div className={styles.year}>
            <img src="/images/star.svg" alt="Star" className={styles.star} />I
            <span className={styles.heart}>&#10084;&#65039;</span> 70’s
            <img src="/images/star.svg" alt="Star" className={styles.star} />
          </div>
          <h1 className={styles.header}>Band T-Shirts</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis, sem vitae accumsan scelerisque, urna quam ornare augue, a
            dictum tellus nisl in ligula. Morbi dictum tristique congue.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
