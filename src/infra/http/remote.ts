import axios from "axios";

import settings from "@main/configs/settings";

const api = axios.create({
  baseURL: settings.API_URL,
});

export default api;
