import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

const getAllCountries = async () => {
  return axios
    .get(BASE_URL + "all?fields=name,flags,region,population,capital", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const filterCountries = async (region) => {
  return axios
    .get(
      BASE_URL +
        "region/" +
        region +
        "/?fields=name,flags,region,population,capital",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const CountryServices = {
    getAllCountries,
    filterCountries
};

export default CountryServices;
