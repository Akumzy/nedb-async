import Nedb = require('nedb');
import { justPromise , promisefy} from './util'

export class AsyncNedb<G> extends Nedb<G> {
  constructor(pathOrOptions?: string | Nedb.DataStoreOptions | undefined) {
    super(pathOrOptions)
  }
  public asyncFind<T>(query: any, projection?: T) {
    return promisefy.call(this, 'find', arguments) as Promise<T[]>
  }
  public asyncCount(query: any) {
    return promisefy.call(this, 'count', arguments)
  }

  public asyncFindOne<T>(query: any, projection?: T) {
    return promisefy.call(this, 'findOne', arguments) as Promise<T>
  }

  public asyncInsert<T>(newDoc: T) {
    return justPromise.call(this, 'insert', arguments)
  }

  public asyncUpdate(query: any, updateQuery: any, options?: Nedb.UpdateOptions) {
    return justPromise.call(this, 'update', arguments)
  }

  public asyncRemove(query: any, options?: Nedb.RemoveOptions) {
    return justPromise.call(this, 'remove', arguments)
  }

  public asyncEnsureIndex(options: Nedb.EnsureIndexOptions) {
    return justPromise.call(this, 'ensureIndex', arguments)
  }

  public asyncRemoveIndex(fieldName: string) {
    return justPromise.call(this, 'removeIndex', arguments)
  }

  public asyncLoadDatabase() {
    return new Promise((resolve, reject) => {
      this.loadDatabase(err => {
        err ? reject(err) : resolve(true)
      })
    })
  }
}
export default AsyncNedb