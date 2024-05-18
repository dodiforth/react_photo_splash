import { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";
import { pageState } from "@/store/atoms/pageState";

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSearch = () => {
    if (text === "") {
      // If the search bar is empty, set the default search value
      setSearch("Korea");
      setPage(1);
    } else {
      setSearch(text);
      setPage(1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (text === "") {
        // If the search bar is empty, set the default search value
        setSearch("Korea");
        setPage(1);
      } else {
        setSearch(text);
        setPage(1);
      }
    }
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="Search high-resolution image"
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          value={text}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default CommonSearchBar;
