import InfoItem from "../InfoItem/InfoItem";
import { data } from "../../data/infoData";
import styles from "./InfoList.module.css";

const InfoList = () => {
  return (
    <ul className={styles.unorderedList}>
      {data.map((item, index) => (
        <InfoItem index={index} key={item.title} {...item} />
      ))}
    </ul>
  );
};

export default InfoList;
