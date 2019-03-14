import {TASKURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default  {

  /**
   * 获取购物车信息
   * @param url
   * @param cb
   */
  getTaskInfo(cb){
    Api.get(TASKURL,cb)
  }
}
