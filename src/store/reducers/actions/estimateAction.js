import * as Type from "../type";
export function Answer_ok() {
  return { type: [Type.ANSWER_OK] };
}
export function Answer_err() {
  return { type: [Type.ANSWER_ERR] };
}
