import Date from './../src/calculator.js';
// import { TestScheduler } from 'jest';

describe('Date'),() => { 
  test('should correctly return year, month, and day of the object Date', () => {
    const date = new Date(1985, 5, 10);
    expect(date.year).toEqual(1985);
    expect(date.month).toEqual(5);
    expect(date.day).toEqual(10);
  });
  test('should return day of the week when given a date', () => {
    const date1 = new Date(1985, 5, 10);
    expect(date1.checkDate()).toEqual("Monday");
  });

  // test('should return day of the week when given a date', () => {
  //   const date2 = new Date(1984, 4, 10);
  //   expect(date2.checkDate()).toEqual("Sunday");
  // });
});
  
