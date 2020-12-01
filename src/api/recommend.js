/*
 * @Author: Tmier
 * @Date: 2020-12-01 23:08:32
 * @LastEditTime: 2020-12-01 23:23:17
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import jsonp from 'common/js/jsonp.js'
import { commonParams, options} from './config'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({},commonParams,{
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url,data,options)
}