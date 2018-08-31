"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nedb_1 = __importDefault(require("nedb"));
const util_1 = require("./lib/util");
class AsyncNedb extends nedb_1.default {
    constructor(...arg) {
        super(...arg);
    }
    asyncFind(...arg) {
        return util_1.promisefy.call(this, 'find', arg);
    }
    asyncCount(...arg) {
        return util_1.promisefy.call(this, 'count', arg);
    }
    asyncFindOne(...arg) {
        return util_1.promisefy.call(this, 'findOne', arg);
    }
    asyncInsert(...arg) {
        return util_1.justPromise.call(this, 'insert', arg);
    }
    asyncUpdate(...arg) {
        return util_1.justPromise.call(this, 'update', arg);
    }
    asyncRemove(...arg) {
        return util_1.justPromise.call(this, 'remove', arg);
    }
    asyncEnsureIndex(...arg) {
        return util_1.justPromise.call(this, 'ensureIndex', arg);
    }
    asyncRemoveIndex(...arg) {
        return util_1.justPromise.call(this, 'removeIndex', arg);
    }
}
exports.default = AsyncNedb;
