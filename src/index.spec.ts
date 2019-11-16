import AsyncNedb from './index';
import { join } from 'path';
import { unlinkSync } from 'fs';

const dbPath = join(__dirname, 'test.db');
describe('AsyncNedb unit test', () => {
  interface IUser {
    name: string;
    age: number;
  }
  let db: AsyncNedb<IUser>;
  beforeAll(() => {
    db = new AsyncNedb({
      filename: dbPath,
      autoload: true,
    });
  });
  test('should inset into database', async () => {
    const user = await db.asyncInsert({ name: 'Akuma Isaac Akuma', age: 200 });
    expect(user).toHaveProperty('name', 'Akuma Isaac Akuma');
  });
  test('Should find a user', async () => {
    const user = await db.asyncFind({ name: 'Akuma Isaac Akuma' });
    expect(user.length).toBeGreaterThan(0);
  });
  afterAll(() => {
    unlinkSync(dbPath);
  });
});
