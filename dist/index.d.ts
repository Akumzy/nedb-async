import * as Nedb from "nedb";
export default class AsyncNedb extends Nedb {
    constructor(pathOrOptions?: string | Nedb.DataStoreOptions | undefined);
    asyncFind<T>(query: any, projection?: T): Promise<{}>;
    asyncCount(): Promise<{}>;
    asyncFindOne<T>(query: any, projection?: T): Promise<{}>;
    asyncInsert(): Promise<{}>;
    asyncUpdate(query: any, updateQuery: any, options?: Nedb.UpdateOptions): Promise<{}>;
    asyncRemove(): Promise<{}>;
    asyncEnsureIndex(): Promise<{}>;
    asyncRemoveIndex(...arg: []): Promise<{}>;
}
