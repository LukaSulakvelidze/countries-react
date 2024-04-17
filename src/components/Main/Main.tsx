import { useEffect, useState } from "react";
import { Main_props } from "../../interfaces";
import Country_Card from "../Country_Card/Country_Card";
import Search_Filter from "../Search&Filter/Search_Filter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = ({
  main_className,
  form_className,
  inputOnChange,
  inputOnKeyDown,
  magnifer_icon_onClick,
  icon_color,
  filter_container_className,
  region_list,
  countryData,
  pageData,
  country_information_className,
}: Main_props) => {
  const [value, setValue] = useState("");
  const [filterCountry, setFilterCountry] = useState(null || []);
  const navigation = useNavigate();

  const navigateThroughPage = (info: any) => {
    return navigation("/Country_page", {
      state: info,
    });
  };

  const random_number = Math.floor(Math.random() * 241);

  useEffect(() => {
    const filterData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/region/${value}`
        );
        setFilterCountry(response.data);
        setValue("");
      } catch (error) {
        console.log(error);
      }
    };

    if (value) {
      filterData();
    }
  }, [value]);

  const renderCountryCard = (item: any) => (
    <div
      onClick={() => navigateThroughPage(item)}
      className={country_information_className}
      key={Math.random()}
    >
      <Country_Card
        img_src={item.flags.png}
        img_alt={item.flags.alt}
        country_info_className={"country_info_className"}
        country_name={item.name.common}
        country_details_container={"country_details_container"}
        population={item.population}
        region={item.region}
        capital={item.capital}
      />
    </div>
  );

  const renderCountries = () => {
    if (countryData) {
      return countryData.map((item: []) => renderCountryCard(item));
    } else if (filterCountry.length > 0) {
      return filterCountry.map((item: any) => renderCountryCard(item));
    } else {
      return pageData
        .slice(random_number, random_number + 8)
        .map((item: any) => renderCountryCard(item));
    }
  };

  return (
    <main className={main_className}>
      <Search_Filter
        form_className={form_className}
        inputOnChange={inputOnChange}
        inputOnKeyDown={inputOnKeyDown}
        magnifer_icon_onClick={magnifer_icon_onClick}
        icon_color={icon_color}
        filter_container_className={filter_container_className}
        region_list={region_list}
        onClick_africa={() => {
          setValue("Africa");
        }}
        onClick_america={() => {
          setValue("America");
        }}
        onClick_asia={() => {
          setValue("Asia");
        }}
        onClick_europe={() => {
          setValue("Europ");
        }}
        onClick_oceania={() => {
          setValue("Oceani");
        }}
      />
      <div className="country_grid_container">{renderCountries()}</div>
    </main>
  );
};

export default Main;
