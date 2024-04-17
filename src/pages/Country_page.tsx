import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../country_page_components/Main/Main";

const Country_page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bodyClass, setBodyClass] = useState("");
  const location = useLocation();
  const country = location.state;

  const bodyClassToggle = (bodyclass: string) => {
    setBodyClass(bodyclass);
  };
  document.body.className = bodyClass;
  return (
    <>
      <Header
        header_classname={darkMode ? "header_dark" : ""}
        onClick={() => {
          setDarkMode(!darkMode);
          !darkMode ? bodyClassToggle("body_dark") : bodyClassToggle("");
        }}
      />
      <Main
        button_className={
          darkMode ? "go_back_button go_back_button_dark" : "go_back_button"
        }
        country_content_className={
          darkMode ? "country_content country_content_dark" : "country_content"
        }
        country_img_src={country.flags.png}
        country_img_alt={country.flags.alt}
        country_name={country.name.common}
        native_name={country.name.official}
        population={country.population}
        region={country.region}
        sub_region={country.subregion}
        capital={country.capital}
        domain={country.tld}
        languages={country.languages.por}
        countries={country.borders}
        border_countries_button_className={
          darkMode
            ? "border_countries_button border_countries_button_dark"
            : "border_countries_button"
        }
      />
    </>
  );
};

export default Country_page;
