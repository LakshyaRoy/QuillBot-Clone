import axios from "axios";

const options = {
  method: "GET",
  url: "https://google-web-search1.p.rapidapi.com/",
  params: {
    query: "Cricket World Cup",
    limit: "20",
    related_keywords: "true",
  },
  headers: {
    "X-RapidAPI-Key": "54376d2a3amsh2811ae172f3c4d1p1100f2jsne2fc79adec96",
    "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
