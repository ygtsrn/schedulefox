///////
 function fetchDateTimeNow(){
    return new Date();
    // return new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false });
}
///////
function fetchCalTimePattern(patternArg){
  let patternValue = fetchTimeLangConverter(patternArg);
  return patternValue;
}
///////
function fetchCalNextRunDate(dateArg, patternArg){
    let date = new Date(dateArg);
    let patternValue = fetchTimeLangConverter(patternArg);
    let cal = date.valueOf() + patternValue;
    let dateCal = new Date(cal);
    return dateCal;
}
///////
function fetchCalDateDiff(startDate, endDate){
    startDate =  new Date(startDate);
    endDate =  new Date(endDate);
    let cal = startDate.valueOf() - endDate.valueOf();
    return cal;
}
///////
const timeUnits = {}; 
timeUnits.Second = 1000; timeUnits.Minute = timeUnits.Second * 60; timeUnits.Hour = timeUnits.Minute * 60; timeUnits.Day = timeUnits.Hour * 24;
timeUnits.Week = timeUnits.Day * 7; timeUnits.Month = timeUnits.Day * 30; timeUnits.Year = timeUnits.Day * 365;
const numberMap = { One: 1, Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10 };
const decimals = f => {
  const lang = numberMap;
  const mapRegex = new RegExp('(' + Object.keys(lang).join('|') + ')', 'g');
  const res = f.match(mapRegex);
  if (!res) { return f; }
  res.forEach(x => { const xStr = lang[x] > 1 ? lang[x] : lang[x].toString().slice(1); time = time.replace(x, xStr); });
  return f;
};
const units = f => {
  if (f.match(/(Second|Minute|Hour|Day|Week|Month|Year)s?/) === null) { return undefined; }
  const num = parseFloat(f, 10) || 1;
  const unit = f.match(/(Second|Minute|Hour|Day|Week|Month|Year)s?/)[1];
  return timeUnits[unit] * num;
};
const fetchTimeLangConverter = f => {
  if (!f) { return f; }
  if (typeof f === 'number') { return f; }
  f = decimals(f);
  f = f.replace(/(Second|Minute|Hour|Day|Week|Month|Year)s?(?! ?(s )?and |s?$)/, '$1,');
  return f.split(/and|,/).reduce((sum, group) => { return sum + (group ? units(group) : 0); }, 0);
};
fetchTimeLangConverter.numberMap = numberMap;
///////
module.exports = {
    fetchDateTimeNow,
    fetchCalTimePattern,
    fetchCalNextRunDate,
    fetchCalDateDiff
}