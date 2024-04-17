import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Search_Filter_Props } from "../../interfaces";
import { useState } from "react";

const Search_Filter = ({
  form_className,
  inputOnChange,
  inputOnKeyDown,
  magnifer_icon_onClick,
  icon_color,
  filter_container_className,
  region_list,
  onClick_africa,
  onClick_america,
  onClick_asia,
  onClick_europe,
  onClick_oceania,
}: Search_Filter_Props) => {
  const [RegionListShow, setRegionListShow] = useState(false);

  return (
    <div className="search_input_filter">
      <form className={form_className}>
        <input
          onChange={inputOnChange}
          onKeyDown={inputOnKeyDown}
          type="text"
          placeholder="Search for a country…"
        />
        <FontAwesomeIcon
          onClick={magnifer_icon_onClick}
          icon={faMagnifyingGlass}
          style={{ color: icon_color, cursor: "pointer" }}
        />
      </form>

      <div className="filter">
        <div
          onClick={() => setRegionListShow(!RegionListShow)}
          className={filter_container_className}
        >
          <span>Filter by Region</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        {RegionListShow && (
          <ul className={region_list}>
            <li onClick={onClick_africa}>Africa</li>
            <li onClick={onClick_america}>America</li>
            <li onClick={onClick_asia}>Asia</li>
            <li onClick={onClick_europe}>Europa</li>
            <li onClick={onClick_oceania}>Oceanic</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search_Filter;
