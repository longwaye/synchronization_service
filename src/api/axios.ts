import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/49bf644157c2095d9f274774cdd8b5b0/api/"
});

const ajax = axios.create({
  baseURL: "https://www.fastmock.site/mock/b731d809c25b161cc4139a9abe4a18b7/oam"
});

export { instance, ajax };
