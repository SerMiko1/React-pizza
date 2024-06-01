import React from "react";

import styles from "./Search.module.scss";
import { SearchContext } from "../app/App";

const Search = () => {

const { SearchValue, setSearchValue } =  React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <span className={styles.icon}>😋</span>
      <input
        value={SearchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {SearchValue && (
        <svg onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              opacity="0.5"
              cx="12"
              cy="12"
              r="10"
              stroke="#fe5f1e"
              stroke-width="1.5"
            />{" "}
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#fe5f1e"
              stroke-width="1.5"
              stroke-linecap="round"
            />{" "}
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
