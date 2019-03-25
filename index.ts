import * as Nedb from "nedb";
import { promisefy, justPromise } from "./util";

export default class AsyncNedb extends Nedb {
  constructor(pathOrOptions?: string | Nedb.DataStoreOptions | undefined) {
    super(pathOrOptions)
  }
  public asyncFind<T>(query: any, projection?: T) {
    return promisefy.call(this, 'find', arguments)
  }
asyncCount() {
  return promisefy.call(this, 'count', arguments)
}
asyncFindOne<T>(query: any, projection?: T) {
  return promisefy.call(this, 'findOne', arguments)
}
asyncInsert() {
  return justPromise.call(this, 'insert', arguments)
}
asyncUpdate(query: any, updateQuery: any, options?: Nedb.UpdateOptions) {
  return justPromise.call(this, 'update', arguments)
}
asyncRemove() {
  return justPromise.call(this, 'remove', arguments)
}
asyncEnsureIndex() {
  return justPromise.call(this, 'ensureIndex', arguments)
}
asyncRemoveIndex(...arg: []) {
  return justPromise.call(this, 'removeIndex', arguments)
}
}
