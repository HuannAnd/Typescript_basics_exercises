import * as Exercises from '../Exercises1'

describe('testing first exercise', () => {
  test('exercise A', () => {
    expect(Exercises.Exercise1A()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  
  test('exercise B', () => {
    expect(Exercises.Exercise1B()).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
  });
  test('Exercise 13',() => {
    expect(Exercises.Exercise13([1,1,1,1,1,1,1,1,1,16])).toStrictEqual(16)
  }); 

});
