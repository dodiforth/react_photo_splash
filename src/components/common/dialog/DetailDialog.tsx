import { CardDTO, Tag } from "@/pages/index/types/card";
import styles from "./DetailDialog.module.scss";

interface Props {
  // Declare the Props interface
  data: CardDTO;
  handleDialog: (open: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
  const closeDialog = () => {
    // Close the dialog
    handleDialog(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button} onClick={closeDialog}>
              {/*Google Icon*/}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + "px" }}
              >
                close
              </span>
            </button>
            <img
              src={data.user.profile_image.small}
              alt="Photographer's profile photo"
              className={styles.close__authorImage}
            />
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>
              {/*Google Icon*/}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 + "px" }}
              >
                favorite
              </span>
              Bookmark
            </button>
            <button className={styles.bookmark__button}>Download</button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img
            src={data.urls.small}
            alt="Detail image"
            className={styles.image}
          />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Image Size</span>
              <span className={styles.infoBox__item__value}>
                {data.width} X {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Upload</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Last Update</span>
              <span className={styles.infoBox__item__value}>
                {data.updated_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Download</span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            {data.tags.map((tag: Tag) => {
              return (
                <div className={styles.tagBox__tag} key={tag.title}>
                  {tag.title}
                </div>
              );
            })}
            <div className={styles.tagBox__tag}>Tag Data</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
