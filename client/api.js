const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

// : itinerary_id = location.hash.slice(1);

const fetchItinerary = (itinerary_id) => 
  fetch(`/api/itineraries/${itinerary_id}`)
  .then(result => result.json())
  .catch(err => console.error(err))

console.log('api')


module.exports = {
  fetchAttractions,
  fetchItinerary
};

