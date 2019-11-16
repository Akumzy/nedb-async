import AsyncNedb from './index';
import { join } from 'path';
import { expect } from 'chai';
import { unlinkSync } from 'fs';

const dbPath = join(__dirname, 'test.db');
describe('AsyncNedb unit test', () => {
  interface IUser {
    name: string;
    age: number;
  }
  let db: AsyncNedb<IUser>;
  before(done => {
    db = new AsyncNedb({
      filename: dbPath,
      autoload: true,
    });
    done();
  });
  it('should inset into database', async () => {
    const user = await db.asyncInsert({ name: 'Akuma Isaac Akuma', age: 200 });
    expect(user).ownProperty('name', 'Akuma Isaac Akuma');
  });
  it('Should find a user', async () => {
    const user = await db.asyncFind({ name: 'Akuma Isaac Akuma' });
    expect(user.length).gte(0);
  });
  after(() => {
    unlinkSync(dbPath);
  });
});
