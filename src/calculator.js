//Business Logic
export default function DateCalculator(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

DateCalculator.prototype.checkDate = function() {
  let date = new Date(this.year, this.month, this.day);
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let result = weekday[date.getDay()];
  return result
  };
  