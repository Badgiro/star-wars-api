import { HTTP, HTTPS } from "@constants/api";


/**
 * Меняет HTTP на HTTPS
 * @param {String} url -url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP= (url) => {
const result = url? url.replace(HTTP, HTTPS ) : url
return result
}


/**
 * Получает данные с сервера и отлавливает ошибку, в случае их отсутствия
 * @param {String} url - принимает url сервера
 * @returns {String} - либо ошибка и ее статус, либо данные
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("could not get", res.status);
      return false;
    }
    return res.json();
  } catch (error) {
    console.error(error.mesage);
  }
};

export const makeConcurentRequest = async (url) => {
 const res = await Promise.all(url.map(res => {
    return fetch(res).then(res=> res.json())
  }))
  return res
}
