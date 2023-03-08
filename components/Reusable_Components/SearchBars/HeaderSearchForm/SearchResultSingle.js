import Link from "next/link";
import { useEffect } from "react";
import { encrypt } from "../../../../helper/crypto";

const SearchResultSingle = ({ result, clickHandler, currentFocus, id, setSearchText }) => {
  //   useEffect(() => {
  //     if (currentFocus == id) {
  //       setSearchText(result.ItemName);
  //     }
  //   });
  return (
    <li className={`result ${currentFocus == id ? "active" : ""}`} onClick={clickHandler} id={id}>
      <Link
        href={{
          pathname: `/products/search`,
          query: {
            id: encrypt(`${result.ItemId}`),
            flag: encrypt(`${result.itemCateFlg}`),
          },
        }}
      >
        {result.ItemName}
      </Link>
    </li>
  );
};

export default SearchResultSingle;
