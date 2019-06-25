import * as Type from "../type";
import axios from "../../../bin/axios";
//正在获取数据
export function Kemu1_fetching(data) {
  return { type: Type.REQUEST_KEMU1_FETCHING, data };
}
//数据获取完成
export function Kemu1_fetched(data) {
  return { type: Type.REQUEST_KEMU1_FETCHED, data };
}
//异步操控
export function anyRequestKemu1(postKemu) {
  return dispatch => {
    dispatch(Kemu1_fetching());
    return axios.query("kemu1", { ...postKemu }, res => {
      dispatch(Kemu1_fetched(res.data.data));
    });
  };
}
//正在获取数据
export function Kemu4_fetching(data) {
  return { type: Type.REQUEST_KEMU4_FETCHING, data };
}
//数据已经获取完成
export function Kemu4_fetched(data) {
  return { type: Type.REQUEST_KEMU4_FETCHED, data };
}
//异步操控
export function anyRequestKemu4(postKemu) {
  return dispatch => {
    dispatch(Kemu4_fetching());
    return axios.query("kemu4", { ...postKemu }, res => {
      dispatch(Kemu4_fetched(res.data.data));
    });
  };
}
