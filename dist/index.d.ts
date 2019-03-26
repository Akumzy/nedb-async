import * as Nedb from "nedb";
export default class AsyncNedb extends Nedb {
    constructor(pathOrOptions?: string | Nedb.DataStoreOptions | undefined);
    asyncFind<T>(query: any, projection?: T): Promise<T[]>;
    asyncCount(query: any): Promise<{} | {}[]>;
    asyncFindOne<T>(query: any, projection?: T): Promise<T>;
    asyncInsert<T>(newDoc: T): Promise<{}>;
    asyncUpdate(query: any, updateQuery: any, options?: Nedb.UpdateOptions): Promise<{}>;
    asyncRemove(query: any, options?: Nedb.RemoveOptions): Promise<{}>;
    asyncEnsureIndex(options: Nedb.EnsureIndexOptions): Promise<{}>;
    asyncRemoveIndex(fieldName: string): Promise<{}>;
    asyncLoadDatabase(): Promise<{}>;
}
