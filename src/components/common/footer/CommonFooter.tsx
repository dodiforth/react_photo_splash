import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import styles from "./CommonFooter.module.scss";
import { imageData } from "@/store/selectors/imageSelector";
import { pageState } from "@/store/atoms/pageState";
import { useEffect, useState } from "react";
import { searchState } from "@/store/atoms/searchState";

function CommonFooter() {
  const storeImage = useRecoilValueLoadable(imageData);
  const search = useRecoilValue(searchState);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useRecoilState(pageState);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [search]);

  // UI for the pagination (page list)
  const newArr: number[] = new Array();
  for (let i = 1; i <= storeImage.contents.total_pages; i++) {
    newArr.push(i);
  }
  const length = newArr.length;
  const divide = Math.ceil(length / 10);
  const res = [];

  for (let i = 0; i <= divide; i++) {
    res.push(newArr.slice(i * 10, i * 10 + 10));
  }

  //const pages =
  // ----------------------------------------------
  const moveToPage = (selected: number) => {
    setPage(selected);
    setCurrentPage(selected);
  };

  const moveToPreviousPage = () => {
    if (step === 0) return;
    else {
      setStep(step - 1);
      setPage(res[step - 1][0]);
    }
  };

  const moveToNextPage = () => {
    if (step === divide - 1) return;
    else {
      setStep((prevStep) => prevStep + 1);
      setPage(res[step][0]);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button
          className={styles.pagination__button}
          onClick={moveToPreviousPage}
        >
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {res[step] &&
          res[step].map((page: number) => {
            return (
              <button
                className={
                  page === currentPage
                    ? `${styles.pagination__button} ${styles.active}`
                    : `${styles.pagination__button} ${styles.inactive}`
                }
                onClick={() => moveToPage(page)}
              >
                {page}
              </button>
            );
          })}
        <button className={styles.pagination__button} onClick={moveToNextPage}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
