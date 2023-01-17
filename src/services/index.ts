import { Place } from "../ISearchResult.js";

const LOCALHOST_PATH = 'http://localhost:8000/'
const BOOKING_ROOMS_PATH = `${LOCALHOST_PATH}db.backup.json`;

export const getBookingRooms = () => {
  fetch(BOOKING_ROOMS_PATH)
    .then((res) => {
      return res.text()
    })
    .then<Place>((response) => {
      return JSON.parse(response)
    })
    .then((data) => {
      localStorage.setItem('places', JSON.stringify(data))
    })
}
