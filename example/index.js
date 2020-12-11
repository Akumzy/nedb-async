const path = require('path');
const AsyncNedb = require('../dist').default;
let db = new AsyncNedb({
  inMemoryOnly: true,
});
const data = [{ name: 'Akuma' }, { name: 'Isaac' }, { name: 'Kalu' }];
async function main() {
  console.log(await db.asyncEnsureIndex({ fieldName: 'name', unique: true }));
  console.log(await db.asyncInsert(data));

  let a = await db.asyncFind({}, [
    // ['limit', 1],
    ['sort', { name: 1 }],
  ]);

  console.log('Sort', a);
  console.log(await db.asyncCount({}));
  console.log(await db.asyncFindOne({}));
  console.log(await db.asyncRemove({}));
  console.log(await db.asyncCount({}));
}

main();
