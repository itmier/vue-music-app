/*
 * @Author: Tmier
 * @Date: 2020-11-29 22:55:50
 * @LastEditTime: 2020-12-01 23:49:03
 * @Description:
 * @LastModifiedBy: Tmier
 */
import originJSONP from "jsonp";

export default function jsonp(url, data, option) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
function param(data) {
  let url = "";
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : "";
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : "";
}
