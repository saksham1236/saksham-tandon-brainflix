/**
 * Converts Unix Timestamp to Date
 * @param date as number or string in Unix Format
 * @returns convertedDate
 */
function ConvertDatetoUS(date: any) {
    const newDate = new Intl.DateTimeFormat("en-US").format(
      new Date(Number(date))
    );
    return newDate;
}

export default ConvertDatetoUS;