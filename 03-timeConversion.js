const timeConversion = (s) => {
  let rawTime = '';
  let hourType = '';

  if (s.includes('AM')) {
    rawTime += s.replace('AM', '');
    hourType = 'AM';
  } else {
    rawTime += s.replace('PM', '');
    hourType = 'PM';
  }

  let hour = parseInt(rawTime.substring(0, 2));

  hour == 12 && hourType == 'AM'
    ? (hour = '0' + (hour - 12))
    : hour < 12 && hour >= 10 && hourType == 'AM'
    ? hour
    : hour == 12 && hourType == 'PM'
    ? hour
    : hour < 12 && hourType == 'PM'
    ? (hour += 12)
    : hour >= 1 && hour <= 9 && hourType == 'AM'
    ? (hour = '0' + hour)
    : hour;

  let newTime = rawTime.substring(2, 8);
  newTime = hour.toString() + newTime;
  console.log(newTime);

  return newTime.toString();
};

timeConversion('07:05:45PM');
