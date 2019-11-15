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
    asyncCount(query) {
        return util_1.promisefy.call(this, 'count', arguments);
    }
    asyncFindOne(query, projection) {
        return util_1.promisefy.call(this, 'findOne', arguments);
    }
    asyncInsert(newDoc) {
        return util_1.justPromise.call(this, 'insert', arguments);
    }
    asyncUpdate(query, updateQuery, options) {
        return util_1.justPromise.call(this, 'update', arguments);
    }
    asyncRemove(query, options) {
        return util_1.justPromise.call(this, 'remove', arguments);
    }
    asyncEnsureIndex(options) {
        return util_1.justPromise.call(this, 'ensureIndex', arguments);
    }
    asyncRemoveIndex(fieldName) {
        return util_1.justPromise.call(this, 'removeIndex', arguments);
    }
    asyncLoadDatabase() {
        return new Promise((resolve, reject) => {
            this.loadDatabase(err => {
                err ? reject(err) : resolve(true);
            });
        });
    }
}
exports.AsyncNedb = AsyncNedb;
exports.default = AsyncNedb;
