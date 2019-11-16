// const db = require('../index');
const _ = require('lodash');
const { AsyncNedb } = require('../index');


let db;
const testVal1 = 'testVal1';
const testVal2 = 'testVal2';
const testVal3 = 'testVal3';
const testData1 = { aField: testVal1 };
const testData2 = { aField: testVal2 };
const testData3 = { aField: testVal3 };
const testDataArr = [testData1, testData2, testData3];

let recs;

const addMany = async()=> {
  recs = await db.asyncInsert({ somedata: 'ok' });
  recs = await db.asyncInsert({ somedata: 'again', plus: 'additional data' });
  recs = await db.asyncInsert({ somedata: 'again' });
};

beforeEach(()=>{
  db = new AsyncNedb({ inMemoryOnly: true });
  
});

test('Insert and retrieve a document', async ()=>{

  recs = await db.asyncFind({});
  expect(recs.length).toEqual(0);

  recs = await db.asyncInsert(testData1);

  recs = await db.asyncFind({});
  expect(recs.length).toEqual(1);

  expect(Object.keys(recs[0]).length).toEqual(2);

  expect(recs[0].aField).toEqual(testVal1);

  expect(recs[0]._id).toBeDefined();

});

test('Insert and retrieve multiple documents', async ()=>{
  let recs = await db.asyncFind({});
  expect(recs.length).toEqual(0);

  recs = await db.asyncInsert(testData1);
  recs = await db.asyncInsert(testData2);
  recs = await db.asyncInsert(testData3);

  recs = await db.asyncFind({});
  expect(recs.length).toEqual(3);

  expect( _.map(recs, 'aField') ).toContain(testVal1);
  expect( _.map(recs, 'aField') ).toContain(testVal2);
  expect( _.map(recs, 'aField') ).toContain(testVal3);

  expect(Object.keys(recs[2]).length).toEqual(2);

  //unnecessary, but why not
  expect(recs[2]._id).toBeDefined();
  expect(recs[1]._id).toBeDefined();
  expect(recs[0]._id).toBeDefined();
  
});

test('Insert and retrieve complex objects', async () =>{
  let recs = await db.asyncFind({});
  expect(recs.length).toEqual(0);

  const da = new Date();
  const obj = { a: ['ee', 'ff', 42], date: da, subobj: { a: 'b', b: 'c' } };

  const ignore = await db.asyncInsert(obj);

  const rec = await db.asyncFindOne({});
  expect(rec.a.length).toEqual(3);
  expect(rec.a[0]).toEqual('ee');
  expect(rec.a[1]).toEqual('ff');
  expect(rec.a[2]).toEqual(42);
  expect(rec.date.getTime()).toEqual(da.getTime());
  expect(rec.subobj.a).toEqual('b');
  expect(rec.subobj.b).toEqual('c');

});

test("Count One", async()=>{
  recs = await db.asyncInsert(testData1);

  const cnt = await db.asyncCount({});
  expect(cnt).toEqual(1);

});

test("Count with query", async()=>{
  await addMany();
  
  let cnt = await db.asyncCount({somedata:'again'});
  expect(cnt).toEqual(2);

  cnt = await db.asyncCount({somedata:'nope'});
  expect(cnt).toEqual(0);
  
});

test("Update a record", async()=>{
  await addMany();

  let cnt = await db.asyncUpdate( {somedata:'again'}, {newDoc: 'yes'});
  expect(cnt).toEqual(1);

  cnt = await db.asyncCount({somedata:'nope'});
  expect(cnt).toEqual(0);

});

test("Update many records", async()=>{
  await addMany();

  let cnt = await db.asyncUpdate( {somedata:'again'}, {newDoc: 'yes'}, {multi:'yes'});
  expect(cnt).toEqual(2);

  cnt = await db.asyncCount({somedata:'nope'});
  expect(cnt).toEqual(0);

});




test("Delete a record", async () => {
  await addMany();

  let cnt = await db.asyncCount({ somedata: 'again' });
  expect(cnt).toEqual(2);

  cnt = await db.asyncRemove({ somedata: 'again' });
  expect(cnt).toEqual(1);

  cnt = await db.asyncCount({});
  expect(cnt).toEqual(2);

});

test("Delete many records", async () => {
  await addMany();

  let cnt = await db.asyncCount({ somedata: 'again' });
  expect(cnt).toEqual(2);

  cnt = await db.asyncRemove({ somedata: 'again' }, {multi:true});
  expect(cnt).toEqual(2);

  cnt = await db.asyncCount({});
  expect(cnt).toEqual(1);

});
