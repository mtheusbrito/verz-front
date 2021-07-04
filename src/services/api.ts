import axios from "axios";

var env = process.env.NODE_ENV || "development";

const url =
  env === "production"
    ? "urlSite"
    : `${process.env.REACT_APP_SERVER_URL}/`

axios.defaults.baseURL = url;