///////
 function fetchDateTimeNow(){
    return new Date();
    // return new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false });
}
///////
function fetchCalNextRunDate(dateArg, patternArg){
    let date = new Date(dateArg);
    console.log(date);
    let patternValue = fetchTimeLangConverter(patternArg);
    console.log(patternValue);
    let cal = date.valueOf() + patternValue;
    console.log(cal);
    let dateCal = new Date(cal);
    console.log(dateCal);
    return dateCal;
}
///////
const timeUnits = {}; 
timeUnits.Second = 1000; timeUnits.Minute = timeUnits.Second * 60; timeUnits.Hour = timeUnits.Minute * 60; timeUnits.Day = timeUnits.Hour * 24;
timeUnits.Week = timeUnits.Day * 7; timeUnits.Month = timeUnits.Day * 30; timeUnits.Year = timeUnits.Day * 365;
const numberMap = { One: 1, Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10 };
const decimals = t => {
  const lang = numberMap;
  const mapRegex = new RegExp('(' + Object.keys(lang).join('|') + ')', 'g');
  const res = t.match(mapRegex);
  if (!res) { return t; }
  res.forEach(x => { const xStr = lang[x] > 1 ? lang[x] : lang[x].toString().slice(1); time = time.replace(x, xStr); });
  return t;
};
const units = t => {
  if (t.match(/(Second|Minute|Hour|Day|Week|Month|Year)s?/) === null) { return undefined; }
  const num = parseFloat(t, 10) || 1;
  const unit = t.match(/(Second|Minute|Hour|Day|Week|Month|Year)s?/)[1];
  return timeUnits[unit] * num;
};
const fetchTimeLangConverter = t => {
  if (!t) { return t; }
  if (typeof t === 'number') { return t; }
  t = decimals(t);
  t = t.replace(/(Second|Minute|Hour|Day|Week|Month|Year)s?(?! ?(s )?and |s?$)/, '$1,');
  return t.split(/and|,/).reduce((sum, group) => { return sum + (group ? units(group) : 0); }, 0);
};
fetchTimeLangConverter.numberMap = numberMap;
///////
module.exports = {
    fetchDateTimeNow,
    fetchCalNextRunDate,
    fetchTimeLangConverter
}