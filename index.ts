import Nedb from "nedb";
import { promisefy, justPromise } from "./lib/util";

export default class AsyncNedb extends Nedb {
  constructor(...arg:[]) {
    super(...arg)
  }
  asyncFind(...arg:[]) {
    return promisefy.call(this,'find', arg)
  }
  asyncCount(...arg:[]) {
    return promisefy.call(this,'count', arg)
  }
  asyncFindOne(...arg:[]) {
    return promisefy.call(this,'findOne', arg)
  }
  asyncInsert(...arg:[]) {
    return justPromise.call(this,'insert', arg)
  }
  asyncUpdate(...arg:[]) {
    return justPromise.call(this,'update', arg)
  }
  asyncRemove(...arg:[]) {
    return justPromise.call(this,'remove', arg)
  }
  asyncEnsureIndex(...arg:[]) {
    return justPromise.call(this,'ensureIndex', arg)
  }
  asyncRemoveIndex(...arg:[]) {
    return justPromise.call(this,'removeIndex', arg)
  }
}
