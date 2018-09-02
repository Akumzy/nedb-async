//Test with vscode extension quakka
import DB from 'nedb-async';
import path from "path";
let db = new DB({
  filename: path.join(__dirname, "test.db"),
  autoload: true
});

;
( async () => {
  console.log(await db.asyncInsert({name: 'Akuma'}));

  console.log(await db.asyncInsert([{name: 'Issac'},{name: 'Promise'}]))

  let a = await db.asyncFind({},[['limit',1],['sort', -1]])

  console.log(a)
  console.log(await db.asyncCount({}));
  console.log(await db.asyncFindOne({}));
  console.log(await db.asyncRemove({name: 'Akuma'}));
  console.log(await db.asyncCount({}));
} 
)()