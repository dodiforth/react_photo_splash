import styles from "./Card.module.scss";
import { CardDTO } from "../types/card"; // Import the Props type from the appropriate file

interface Props {
  data: CardDTO;
  handleDialog: (open: boolean) => void;
  handleSetMetaData: (data: CardDTO) => void;
}

function Card({ data, handleDialog, handleSetMetaData }: Props) {
  const openDialog = () => {
    handleDialog(true);
    handleSetMetaData(data);
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
