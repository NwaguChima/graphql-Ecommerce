// get country from coordinates (latitude, longitude)
export const getCountry = (latitude: number, longitude: number) => {
  return new Promise((resolve, reject) => {
    console.log(process.env.REACT_APP_OPENCAGE_API_KEY);

    const url = `https://api.opencagedata.com/geocode/v1/json?q=44.500000+‑89.500000&key=b6580dd96e454a949dea928af59c924f&pretty=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          resolve(data.results[0].components["ISO_3166-1_alpha-3"]);
        } else {
          reject(data.status.message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
