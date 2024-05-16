import { useState } from "react";
import { CardDTO } from "./types/card";
import { useRecoilValue } from "recoil";
import { imageData } from "@/store/selectors/imageSelector";

import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";

// CSS
import styles from "./styles/index.module.scss";

function index() {
  const storeImage = useRecoilValue(imageData);
  const [imgData, setImgData] = useState<CardDTO[]>([]);

  const CARD_LIST = storeImage.data.results.map((card: CardDTO) => {
    return <Card key={card.id} data={card} />;
  });

  return (
    <div className={styles.page}>
      {/*공통 헤더 UI 부분 - Common Header UI Section*/}
      <CommonHeader />
      {/*공통 네비게이션 UI 부분 - Common Navigation UI Section*/}
      <CommonNav />
      {/*메인 페이지 컨텐츠 UI 부분 - Main Page Contents UI Section*/}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              It is a source of visual materials on the internet. <br />
              Supported by creators from all regions.
            </span>
            {/*검색창 UI부분 - Search Bar UI Section*/}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/*공통 푸터 UI 부분 - Common Footer UI Section*/}
      <CommonFooter />
    </div>
  );
}

export default index;
