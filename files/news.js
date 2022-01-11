const request = require("request");

const news = (callback) => {
  const newsUrl =
    "https://newsapi.org/v2/everything?q=sport&from=2021-12-11&sortBy=publishedAt&apiKey=d4dfb4faecf543e6be2521a72d4bc628";
  request({ url: newsUrl, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to news serves", undefined);
    } else if (response.body.code == "parametersIncompatible") {
      callback(
        "You cannot mix the sources parameter with the country or category parameters.",
        undefined
      );
    } else if (response.body.code == "apiKeyMissing") {
      callback(
        "Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header.",
        undefined
      );
    } else if (response.body.code == "apiKeyInvalid") {
      callback(
        "Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key.",
        undefined
      );
    } else if (response.body.totalResults == 0) {
      callback(undefined, response.body.articles["no data"]);
    } else {
      callback(
        undefined,
        response.body.articles
      );
    }
  });
};

module.exports = news