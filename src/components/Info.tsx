import styles from "./Info.module.scss";

export const Info = () => (
  <section className={styles.section}>
    <div className={styles.row}>
      <div className={styles.column}>
        <img src="/images/graph.svg" alt="Graph" />
      </div>
      <div className={styles.column} style={{}}>
        T-shirts
      </div>
    </div>
    <div
      className={styles.row}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className={styles.column}>
        <img src="/images/map.svg" alt="World map" />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        <img
          src="/images/model-male.png"
          alt="Male T-shirt"
          className={styles.model}
        />
      </div>
      <div className={styles.column}>
        <img
          src="/images/model-female.png"
          alt="Male T-shirt"
          className={styles.model}
        />
      </div>
    </div>
  </section>
);

export default Info;
