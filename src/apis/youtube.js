import axios from "axios";

const KEY = "AIzaSyC1c_-MfmhIwvuaU4hBARoVcwvwdXGrKDg";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  type: "video",
  key: `${KEY}`,
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
