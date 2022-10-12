import { fn } from '.';
import { Connection } from '@planetscale/database';

describe('test', () => {
  beforeEach(() => {
    new Connection({}); // ERROR!
  });
  test('test', () => {
    expect(fn()).toBe(1);
  });
});
