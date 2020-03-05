/**
 * To get the Class name. Works for checking if object is Range, Spreadsheet, etc. 
 * (Seems silly but everyone seems to have answered it wrong online)
 */
const ss = SpreadsheetApp.getActive();
const sheet = ss.getActiveSheet();
const range = sheet.getRange("A1");

console.log(ss.toString());         // "Spreadsheet"
console.log(sheet.toString());      // "Sheet"
console.log(range.toString());      // "Range"
//  console.log(null.toString());   // Throws error
console.log({}.toString());         // "[object Object]"

/**
 * Extending the above idea, to check if an object is a Range in Apps Script
 */
function isRange(obj) {
  try {
    return obj.toString() === "Range";
  } catch(e) {
    return false;
  }
}