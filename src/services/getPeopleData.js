import { SWAPI_PEOPLE, SWAPI_ROOT, HTTPS, URL_GUIDE_IMG, GUIDE_IMG_EXTENTION } from "@constants/api";

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImg = id => `${URL_GUIDE_IMG}${id}${GUIDE_IMG_EXTENTION}`
