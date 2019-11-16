"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promisefy(name, args) {
    return new Promise((rs, rj) => {
        /**
         * Check if the last argument is
         * an Array.
         * I choose array because all Nedb
         * parameters are objects.
         */
        const arg = [...args];
        if (Array.isArray(arg[arg.length - 1])) {
            const modifies = arg.pop();
            /**
             * nedb methods like
             * find, count, and findOne
             * returns cursor when a
             * callback is not passed
             * to them.
             */
            // @ts-ignore
            const cursor = this[name](...arg);
            let count = 1;
            // @ts-ignore
            for (const modify of modifies) {
                const valid = ['sort', 'limit', 'skip'];
                if (valid.indexOf(modify[0]) === -1) {
                    throw new Error(`${modify[0]} is not recognize, available methods are ${valid.join(',')}`);
                }
                if (typeof modify[0] !== 'string') {
                    throw new Error(`${modify[0]} must be a type of string, available methods are ${valid.join(',')}`);
                }
                /**
                 * If this modify is the last
                 * element of the modifies
                 * array append exec method
                 * the modify array contains
                 * two elements, first element
                 * being the method name while
                 * the last element the method
                 * argument
                 * ['sort',{name: -1, createdAt: -1}]
                 * and so on
                 */
                if (count === arg.length) {
                    cursor[modify[0]](modify[1]).exec((err, docs) => {
                        if (err) {
                            rj(err);
                        }
                        else {
                            rs(docs);
                        }
                    });
                }
                else {
                    cursor[modify[0]](modify[1]);
                }
                count++;
            }
        }
        else {
            // @ts-ignore
            this[name](...arg, (err, docs) => {
                if (err) {
                    rj(err);
                }
                else {
                    rs(docs);
                }
            });
        }
    });
}
exports.promisefy = promisefy;
function justPromise(name, arg) {
    return new Promise((rs, rj) => {
        // @ts-ignore
        this[name](...arg, (err, docs) => {
            if (err) {
                rj(err);
            }
            else {
                rs(docs);
            }
        });
    });
}
exports.justPromise = justPromise;
