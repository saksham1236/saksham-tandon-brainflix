/**
 * Converts Unix Timestamp to Date
 * @param date as number or string in Unix Format
 * @returns convertedDate
 */
function ConvertDatetoUS(date: any) {
  const second = 1000;
  const minute = 60*second;
  const hour =  60*minute;
  const day = 24*hour;
  const year = 365*day;
    const currentTime = Date.now();
    const differenceInTime = currentTime - date;
    const newDate = new Intl.DateTimeFormat("en-US").format(
      new Date(Number(date))
    );
    if(differenceInTime < second ) {
      return `Just Now`;
    } else if(differenceInTime < minute){
      return `${Math.round(differenceInTime/second)} Seconds Ago`
    } else if(differenceInTime < hour){
      return `${Math.round(differenceInTime/minute)} Minutes Ago`
    } else if(differenceInTime < day) {
      return `${Math.round(differenceInTime/hour)} Hours Ago`
    } else if(differenceInTime < year) {
      return `${Math.round(differenceInTime/day)} Days Ago`
    } else {
      return `${Math.round(differenceInTime/year)} Years Ago`
    }
    
}

export default ConvertDatetoUS;