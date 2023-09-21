import axios from "axios";
const API_ENDPOINT = "https://api.dev.pastorsline.com/api/contacts.json";

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
};
const getAllCountry = async (params = "") => {
  let buildUrl = API_ENDPOINT + params;
  let response = await axios.get(buildUrl, { headers });
  return response;
};

export { getAllCountry };
