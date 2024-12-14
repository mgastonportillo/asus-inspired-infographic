import styles from "./InfoItem.module.css";

const InfoItem = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => (
  <li className={styles.li}>
    <div className={styles.numberWrapper}>
      <span className={styles.number}>{index + 1}</span>
      <div className={styles.coverWrapper}>
        <div className={styles.cover} />
      </div>
    </div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export default InfoItem;
