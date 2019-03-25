"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nedb = require("nedb");
const util_1 = require("./util");
class AsyncNedb extends Nedb {
    constructor(pathOrOptions) {
        super(pathOrOptions);
    }
    asyncFind(query, projection) {
        return util_1.promisefy.call(this, 'find', arguments);
    }
    asyncCount() {
        return util_1.promisefy.call(this, 'count', arguments);
    }
    asyncFindOne(query, projection) {
        return util_1.promisefy.call(this, 'findOne', arguments);
    }
    asyncInsert() {
        return util_1.justPromise.call(this, 'insert', arguments);
    }
    asyncUpdate(query, updateQuery, options) {
        return util_1.justPromise.call(this, 'update', arguments);
    }
    asyncRemove() {
        return util_1.justPromise.call(this, 'remove', arguments);
    }
    asyncEnsureIndex() {
        return util_1.justPromise.call(this, 'ensureIndex', arguments);
    }
    asyncRemoveIndex(...arg) {
        return util_1.justPromise.call(this, 'removeIndex', arguments);
    }
}
exports.default = AsyncNedb;
