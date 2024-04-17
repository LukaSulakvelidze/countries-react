import { Link } from "react-router-dom";
import { countryPageMainProps } from "../../interfaces";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./country_page_main.css";

const Main = ({
  button_className,
  country_content_className,
  country_img_src,
  country_img_alt,
  country_name,
  native_name,
  population,
  region,
  sub_region,
  capital,
  domain,
  currency,
  languages,
  countries,
  border_countries_button_className

}: countryPageMainProps) => {
  return (
    <main>
      <Link to={"/"}>
        <Button className={button_className} onClick={() => console.log()}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </Link>

      <div className={country_content_className}>
        <img
          className="flag"
          src={country_img_src}
          alt={country_img_alt}
        />
        <div className="country_info">
          <div className="country_info_child">

          <h1 className="country_name">{country_name}</h1>
          <div className="country_parameters">
            <ul>
              <li><strong>Native Name: </strong> {native_name}</li>
              <li><strong>Population: </strong>{population}</li>
              <li><strong>Region: </strong>{region}</li>
              <li><strong>Sub Region: </strong>{sub_region}</li>
              <li><strong>Capital: </strong>{capital}</li>
            </ul>

            <ul>
              <li><strong>Top Level Domain: </strong>{domain}</li>
              <li><strong>Currencies: </strong>{currency}</li>
              <li><strong>Languages: </strong>{languages}</li>
            </ul>
          </div>
          </div>

          <div className="boarders">
            <h3>Boarder Countries:</h3>
            <div className="border_cards">
            {countries ? countries.map((item:any) => {
              return (
                <div key={Math.random()}>
                <Button children={item} className={border_countries_button_className} />
                </div>
              )
            }): <span>No information</span>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
