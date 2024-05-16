import styles from "./Card.module.scss";
import { CardDTO } from "../types/card"; // Import the Props type from the appropriate file

interface Props {
  data: CardDTO;
}

function Card({ data }: Props) {
  const openDialog = () => {
    console.log("open dialog");
  };
  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={styles.card__image}
      />
    </div>
  );
}

export default Card;
