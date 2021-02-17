import axios from 'axios';

const KEY = 'AIzaSyBx3WrVsNWC7FYAEXI1YeQoPCQE5OBSiuY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
