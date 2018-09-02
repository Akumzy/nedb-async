# Nedb-Async
**nedb-async is a simply promise base wrapper methods for <a href="https://github.com/louischatriot/nedb">Nedb</a>**

```
  //Install with npm

  npm i nedb-async

  //or with yarn

  yarn add nedb-async
```
<img src="https://z-p3-scontent.flos9-1.fna.fbcdn.net/v/t1.0-9/40517761_1095400233942946_1511611996070477824_n.jpg?_nc_cat=0&oh=8d3a070b9fceb9e4157ae17f89746637&oe=5C357C29" alt="Nedb promise test">
How to use? Is very simply, so too avoid to much complexity all the cursor modifiers for ``find, findOne and count`` methods have to be pass as the last argument in an array to differentiate is from the
*query, projection and option* parameters which are mainly `object`

****
**Very important to know that all the promise base methods starts with async then the method name in camel casing**
- asyncFind
- asyncFindOne
- asyncCount
- asyncInsert
- asyncUpdate
- asyncRemove
- asyncEnsureIndex
- asyncRemoveIndex

and every other nedb origin methods are still available

## Usuage:

```js
  db.asyncFind({},[ ['sort', {name: -1}], ['limit',2] ]).then(function (docs) {

  }).catch(function(error) {

  })
  //Or with async await
  async function getUsers() {
    let users = await db.asyncFind({}, [ ['limit', 100] ])
  }
  
  async function countAllUsers() {
    let users = await db.asyncCount({})
  }
```
That's pretty very thing for more please use official <a href="https://github.com/louischatriot/nedb">Nedb</a> documentation or create an issue

## Licence
<a href="https://github.com/Akumzy/nedb-async/blob/master/LICENSE">here</a>
