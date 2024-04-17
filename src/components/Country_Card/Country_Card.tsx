import { Country_Card_Props } from "../../interfaces";

const Country_Card = ({
  img_src,
  img_alt,
  country_info_className,
  country_name,
  country_details_container,
  population,
  region,
  capital,
}: Country_Card_Props) => {
  return (
    <>
      <img className="country_img" src={img_src} alt={img_alt} />
      <div className={country_info_className}>
        <h2 className="country_name">{country_name}</h2>
        <div className={country_details_container}>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default Country_Card;
