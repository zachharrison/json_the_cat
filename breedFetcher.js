const request = require('request');
const args = process.argv.slice(2,3);

const fetchCatsData = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (err, res,body) => {
    if (err && body !== undefined) {
      console.log(err);
    }

    const data = JSON.parse(body);

    if (body === '[]') {
      console.log("Hmmm... I can't seem to find that breed. Please try another");
    } else {
      console.log(data[0].description);
    }
  });
};

fetchCatsData(args);