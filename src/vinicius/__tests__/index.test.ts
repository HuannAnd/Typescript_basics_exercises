import { munition, concat } from '../..'

describe('testing index file', () => {
  test('double function', () => {
    expect(munition(5)).toBe(10);
  });

  test('concat function', () => {
    expect(concat('Paul', ' ', 'McCartney')).toBe('Paul McCartney');
  });
});