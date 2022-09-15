import styles from "./App.module.scss";

export const TShirt = () => (
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
        Ah, the ‘80s. A simpler time when rocking a mullet wasn’t a sign that
        your cultural outfit of choice is a Bintang singlet, and you could spend
        all day at the arcade fondling joysticks like an extra from Stranger
        Things—without the monsters, of course. Speaking of monsters,
        Ghostbusters came out in 1984 and quickly became one of the go-to movies
        to watch on VHS at a sleepover with mates…once you’d finished summoning
        Bloody Mary, of course. As for what you’d be wearing, neon t-shirts were
        all the rage then and made quite the comeback almost 20 years later in
        2012.
      </p>
    </div>
    <div className={styles.column}>
      <img src="/images/neon.svg" alt="Neon T-shirt" />
    </div>
  </section>
);
