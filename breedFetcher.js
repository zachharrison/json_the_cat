const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (err, res, body) => {

    if (err) {
      callback(err, null);
    }

    const data = JSON.parse(body);

    if (body === '[]') {
      callback("Hmmm... I can't seem to find that breed. Please try another", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
