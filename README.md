# Nedb-Async

**nedb-async is a simply promise base wrapper methods for <a href="https://github.com/louischatriot/nedb">Nedb</a>**

## Installation
Install with npm
```bash
  npm install nedb-async
```
or with yarn
```bash
  yarn add nedb-async
```

## Usage

It is very simple and to avoid too much complexity all the cursor modifiers for
`find, findOne and count`
methods has to be pass as the last argument in an array.

---

**Very important to know that all the promise base methods starts with async then the method name in camel casing**

- `asyncFind`
- `asyncFindOne`
- `asyncCount`
- `asyncInsert`
- `asyncUpdate`
- `asyncRemove`
- `asyncEnsureIndex`
- `asyncRemoveIndex`

and every other ned`b origin methods are still available.

## Usage:

```js
db.asyncFind({}, [['sort', { name: -1 }], ['limit', 2]])
  .then(function(docs) {})
  .catch(function(error) {})
//Or with async await
async function getUsers() {
  let users = await db.asyncFind({}, [['limit', 100]])
}

async function countAllUsers() {
  let users = await db.asyncCount({})
}
```

For Nodejs

```js
const DB = require('nedb-async')

const data = new Nedb({
  filename: 'data.db',
  autoload: true,
})
```

## Typescript

For typescript users conceder using this approach for better types support

```ts
import Nedb from 'nedb-async'

interface IUser {
  firstName: string
  lastName: string
  age: number
  email: string
}

const User = new Nedb<IUser>({ filename: 'data.db', autoload: true })
```

Please use the official <a href="https://github.com/louischatriot/nedb">Nedb</a> documentation for more information.

## Licence

MIT
