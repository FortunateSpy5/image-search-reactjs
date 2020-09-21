import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID 8EjyvMwSklYrEd1YqP_uxltqPjimDJOHMQHhVuFOnQ8",
  }
});