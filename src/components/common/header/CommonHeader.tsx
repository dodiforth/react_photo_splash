import { useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

function CommonHeader() {
  const navigate = useNavigate();
  // 북마크 페이지로 이동
  const moveToPage = (filter: string) => {
    if (filter === "main") {
      navigate("/");
    } else {
      navigate("/bookmark");
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img
          src="src/assets/images/image-logo.png"
          alt=""
          className={styles.header__logoBox__logo}
          onClick={() => moveToPage("main")}
        />
        <span
          className={styles.header__logoBox__title}
          onClick={() => moveToPage("main")}
        >
          PhotoSplash
        </span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>
          Summit Photo
        </button>
        <button
          className={styles.header__profileBox__button}
          onClick={() => moveToPage("bookmark")}
        >
          Bookmark
        </button>
        <span className={styles.header__profileBox__userName}>
          Noyo Helsinki | noyoHelsinki@yahoo.com
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;
