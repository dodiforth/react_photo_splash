import { useEffect, useState } from "react";
import styles from "./CommonNav.module.scss";
import navJson from "./nav.json";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";
import { searchState } from "@/store/atoms/searchState";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);

  // after the component is mounted, the useEffect is called
  useEffect(() => {
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;

      if (
        nav.path === location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setPage(1);
        setSearch(nav.searchValue);
      }
    });
    setNavigation([...navigation]);
  }, [location.pathname]);

  // call repeatition of navigation based on the number of navigation data declared in the useState
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        className={
          item.isActive
            ? `${styles.navigation__menu} ${styles.active}`
            : `${styles.navigation__menu} ${styles.inactive}`
        }
        key={item.path}
        to={item.path}
      >
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;
