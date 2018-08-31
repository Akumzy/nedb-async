"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisefy = function (name, arg) {
    return new Promise((rs, rj) => {
        if (Array.isArray(arg[arg.length - 1])) {
            const modifies = arg.pop(), 
            // @ts-ignore
            f = this[name](...arg);
            let c = 0;
            ++c;
            // @ts-ignore
            for (const fb of modifies) {
                if (c === arg.length) {
                    f[fb[0]](fb[1]).exec((err, docs) => {
                        if (err)
                            rj(err);
                        else
                            rs(docs);
                    });
                }
                else
                    f[fb[0]](fb[1]);
            }
        }
        else
            // @ts-ignore
            this[name](...arg, (err, docs) => {
                if (err)
                    rj(err);
                else
                    rs(docs);
            });
    });
};
exports.justPromise = function (name, arg) {
    return new Promise((rs, rj) => {
        // @ts-ignore
        this[name](...arg, (err, docs) => {
            if (err)
                rj(err);
            else
                rs(docs);
        });
    });
};
