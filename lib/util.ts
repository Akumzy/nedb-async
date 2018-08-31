export const promisefy = function (name: string, arg: []) {
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
            f[fb[0]](fb[1]).exec((err:any, docs:any) => {
              if (err) rj(err)
              else rs(docs)
            });
          } else f[fb[0]](fb[1]);
        }
      } else
      // @ts-ignore
        this[name](...arg, (err: any, docs: any) => {
          if (err) rj(err);
          else rs(docs);
        });
    });
}
export const justPromise = function (name: string, arg:[]) {
  return new Promise((rs, rj)=>{
    // @ts-ignore
    this[name](...arg, (err: any, docs: any) => {
      if (err) rj(err);
      else rs(docs);
    })
  })
}
