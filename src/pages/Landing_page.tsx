import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Landing_page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bodyClass, setBodyClass] = useState("");
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageCash, setPageCash] = useState([]);

  const bodyClassSetter = (bodyClass: string) => {
    setBodyClass(bodyClass);
  };
  document.body.className = bodyClass;

  useEffect(() => {
    const getCountryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${input}`
        );
        setCountryData(response.data);
      } catch (error) {
        setCountryData(null);
        console.log(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    const getDataForPage = async () => {
      try {
        const landPageResponse = await axios.get(
          `https://restcountries.com/v3.1/all`
        );
        setLoading(true);
        setPageCash(landPageResponse.data);
      } catch (error) {
        console.log(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    getDataForPage();

    if (buttonClicked) {
      getCountryData();
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  const addOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setButtonClicked(true);
      e.preventDefault();
    }
  };

  const MainMemo = React.useMemo(() => {
    return (
      <Main
        main_className={darkMode ? "main_dark" : ""}
        form_className={darkMode ? "form_dark" : ""}
        inputOnChange={(e: {
          target: { value: React.SetStateAction<string> };
        }) => setInput(e.target.value)}
        inputOnKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          addOnEnter(e)
        }
        magnifer_icon_onClick={() => setButtonClicked(true)}
        icon_color={darkMode ? "white" : "#b2b2b2"}
        filter_container_className={
          darkMode
            ? "filter_container filter_container_dark"
            : "filter_container"
        }
        region_list={darkMode ? "region_list region_list_dark" : "region_list"}
        pageData={pageCash}
        countryData={countryData}
        country_information_className={
          darkMode ? "country_card country_card_dark" : "country_card"
        }
      />
    );
  }, [darkMode, pageCash ]);

  return (
    <>
      {loading ? (
        <Oval wrapperClass="loading_icon" />
      ) : (
        <>
          <Header
            header_classname={darkMode ? "header_dark" : ""}
            onClick={() => {
              setDarkMode(!darkMode);
              {
                !darkMode ? bodyClassSetter("body_dark") : bodyClassSetter("");
              }
            }}
          />
          {MainMemo}
        </>
      )}
    </>
  );
};

export default Landing_page;
