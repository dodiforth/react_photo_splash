import { useState, useEffect } from "react";
import axios from "axios";
import { CardDTO } from "./types/card";

import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";

// CSS
import styles from "./styles/index.module.scss";

function index() {
  const [imgUrl, setImgUrl] = useState([]);
  const getData = async () => {
    // API call
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "NU9M3TPx9Zym4kseq9c41uAl-e02Pf5U6tAk2q9ERdc";
    const PER_PAGE = 30;

    const searchValue = "Korea";
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(res);

      if (res.status === 200) {
        setImgUrl(res.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cardList = imgUrl.map((card: CardDTO) => {
    return <Card key={card.id} data={card} />;
  });

  useEffect(() => {
    getData();
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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      {/*공통 푸터 UI 부분 - Common Footer UI Section*/}
      <CommonFooter />
    </div>
  );
}

export default index;
