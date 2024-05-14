import styles from "./styles/index.module.scss";

function index() {
  return (
    <div className={styles.page}>
      {/*공통 헤더 UI 부분 - Common Header UI Section*/}
      {/*공통 네비게이션 UI 부분 - Common Navigation UI Section*/}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              It is a source of visual materials on the internet. <br />
              Supported by creators from all regions.
            </span>
            {/*검색창 UI부분 - Search Bar UI Section*/}
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
      </div>
      {/*공통 푸터 UI 부분 - Common Footer UI Section*/}
    </div>
  );
}

export default index;