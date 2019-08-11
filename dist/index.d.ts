import Nedb = require('nedb');
export declare class AsyncNedb<G> extends Nedb<G> {
    constructor(pathOrOptions?: string | Nedb.DataStoreOptions | undefined);
    asyncFind<T>(query: any, projection?: T): Promise<T[]>;
    asyncCount(query: any): Promise<unknown>;
    asyncFindOne<T>(query: any, projection?: T): Promise<T>;
    asyncInsert<T>(newDoc: T): Promise<unknown>;
    asyncUpdate(query: any, updateQuery: any, options?: Nedb.UpdateOptions): Promise<unknown>;
    asyncRemove(query: any, options?: Nedb.RemoveOptions): Promise<unknown>;
    asyncEnsureIndex(options: Nedb.EnsureIndexOptions): Promise<unknown>;
    asyncRemoveIndex(fieldName: string): Promise<unknown>;
    asyncLoadDatabase(): Promise<unknown>;
}
export default AsyncNedb;
