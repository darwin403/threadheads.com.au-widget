import styles from "./TShirtIntro.module.scss";

export const TShirtIntro = () => (
  <section className={styles.section}>
    <div className={styles.background} />
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        T-Shirt Timeline: Iconic Trends & Their Comebacks
      </h1>
      <p className={styles.description}>
        Here at Threadheads, we’re not afraid of pulling a Marty McFly and going
        back in time. So, we’re getting our geek on and analysing trends from
        the last ten years to look back on the iconic t-shirts from eras gone by
        that have since made a comeback. From the cringe-worthy to the at least
        somewhat stylish, take a walk down memory lane and check out our 2012-
        2022 comeback trends timeline. We promise there’ll be some LOLs along
        the way.
      </p>
    </div>
  </section>
);
