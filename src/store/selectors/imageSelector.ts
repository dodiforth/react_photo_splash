import { selector } from "recoil";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "NU9M3TPx9Zym4kseq9c41uAl-e02Pf5U6tAk2q9ERdc";
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // API call
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      return res;
    } catch (error) {
      console.error(error);
    }
  },
});
