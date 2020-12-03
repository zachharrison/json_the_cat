const { fetchBreedDescription } = require('./breedFetcher');

const BREED_NAME = process.argv[2];

fetchBreedDescription(BREED_NAME, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

