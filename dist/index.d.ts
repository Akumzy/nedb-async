import Nedb from "nedb";
export default class AsyncNedb extends Nedb {
    constructor(...arg: []);
    asyncFind(...arg: []): any;
    asyncCount(...arg: []): any;
    asyncFindOne(...arg: []): any;
    asyncInsert(...arg: []): any;
    asyncUpdate(...arg: []): any;
    asyncRemove(...arg: []): any;
    asyncEnsureIndex(...arg: []): any;
    asyncRemoveIndex(...arg: []): any;
}
