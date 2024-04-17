import { ReactNode } from "react";

export interface Country_Card_Props {
  img_src: string;
  img_alt: string;
  country_info_className: string;
  country_name: string;
  country_details_container: string;
  population: string;
  region: string;
  capital: string;
}

export interface Main_props {
  main_className: string;
  form_className: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  magnifer_icon_onClick: () => void;
  icon_color: string;
  filter_container_className: string;
  region_list: string;
  countryData: any;
  pageData: any;
  country_information_className: string;
}

export interface Search_Filter_Props {
  form_className: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  magnifer_icon_onClick: () => void;
  icon_color: string;
  filter_container_className: string;
  region_list: string;
  onClick_africa: () => void;
  onClick_america: () => void;
  onClick_asia: () => void;
  onClick_europe: () => void;
  onClick_oceania: () => void;
}

export interface HeaderProps {
  header_classname: string;
  onClick: () => void;
}

export interface countryPageMainProps {
  button_className: string;
  country_content_className: string;
  country_img_src: string;
  country_img_alt: string;
  country_name: string;
  native_name: string;
  population: string;
  region: string;
  sub_region: string;
  capital: string;
  domain: string;
  currency?: string;
  languages: string;
  countries: any;
  border_countries_button_className:string
}

export interface Button_Props {
  children: string | ReactNode;
  className: string;
  onClick?: () => void;
}
