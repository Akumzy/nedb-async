import path from "path";
import DB from "../dist";
let db = new DB({
  filepath: path.join(__dirname, "test.jb"),
  autoload: true
});

db.insert({name: 'Akuma'}, (err, doc)=>{
  if (err) console.log(err)
  else console.log(doc);
})

db.insert([{name: 'Issac'},{name: 'Promise'}], (err, doc)=>{
  if (err) console.log(err)
  else console.log(doc);
})
;
( async () => {
  let a = await db.asyncFind({},[['limit',2],['sort', -1]])
  console.log(a)
  console.log(await db.asyncCount({}));
  console.log(await db.asyncFindOne({}));
  console.log(await db.asyncRemove({name: 'Akuma'}));
  console.log(await db.asyncEnsureIndex({fieldName: 'name'}));
  console.log(await db.asyncRemoveIndex({fieldName: 'name'}));
  console.log(await db.asyncCount({}));
} 
)()
;
console.log(DB);