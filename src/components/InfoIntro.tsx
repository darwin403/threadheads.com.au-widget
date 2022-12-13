import styles from "./InfoIntro.module.scss";

export const InfoIntro = () => (
  <section className={styles.section}>
    <div
      className={styles.background}
      style={{ backgroundImage: 'url("/images/background-starry.svg")' }}
    />
    <div className={styles.wrapper}>
      <h1 className={styles.header}>How does this relate to fashion today?</h1>
      <p className={styles.description}>
        From crop tops to slogan tees and everything in between, it’s safe to
        say that all of the trends discussed in this timeline influence what we
        wear today. Although, none of us could have predicted that arguably the
        biggest trend of the last couple of years would end up being tracksuits
        and hoodies for, well... reasons. Now that we’re slowly exiting what
        we’ll call the ‘dark ages’, we’re looking forward to seeing which
        long-forgotten fad is set to become all the rage again.
      </p>
    </div>
  </section>
);
